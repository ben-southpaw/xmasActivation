<main class="main-content">
    <slot></slot>
    {#if isOpen}
        <CookieWall on:change={onCookieWallChange}/>
    {/if}
</main>

<script>
    import CookieWall from '../CookieWall/CookieWall.svelte';
    import cookie from '../../lib/cookie.js';
    import {isCookieWallOpen, isAnalyticsAccepted} from '../../store/store.js';
    import {onMount} from 'svelte';
    import {PVH_COOKIES_GDPR_ANALYTICS, PVH_COOKIES_GDPR, PVH_COOKIES_GDPR_SOCIALMEDIA} from '../../lib/constants.js';
    import {stores} from '@sapper/app';
    import {TrackingUtils} from '../../utils/tracking_utils.js';

    //----------------------------------------

    let isOpen = false;
    let {session} = stores();

    const ACCEPTED = 'Accept';
    const DEFAULT = 'Default';

    //-------------------------------------------

    onMount(() => {
        isCookieWallOpen.set(!hasAcceptedCookies());
        isAnalyticsAccepted.set(hasAcceptedAnalytics());

        //todo Enable dtrum here?
        if (hasAcceptedCookies() && window.dtrum) {
            window.dtrum.enable();
        }
    });

    isCookieWallOpen.subscribe(value => {
        isOpen = $isCookieWallOpen;
    });

    isAnalyticsAccepted.subscribe(value => {
        if (value) {
            //todo add analytics
            /*  TrackingUtils.InitializeDigitalData(session.market);
            TrackingUtils.InitializeUTAG(session.dev ? 'dev' : 'prod');

            if (window.dtrum) {
                window.dtrum.enable();
            }*/
        }

    });

    //--------------------------------------------

    let hasAcceptedCookies = () => {
        return [
            cookie.get(PVH_COOKIES_GDPR),
            cookie.get(PVH_COOKIES_GDPR_ANALYTICS),
            cookie.get(PVH_COOKIES_GDPR_SOCIALMEDIA)
        ].some((value) => value === ACCEPTED);
    }

    let hasAcceptedAnalytics = () => {
        return cookie.get(PVH_COOKIES_GDPR_ANALYTICS) === ACCEPTED;
    }

    let onCookieWallChange = (data) => {

        Object.entries(data.detail).forEach(pair => {
            cookie.set(pair[0], pair[1])
        });

        isCookieWallOpen.set(false);
        isAnalyticsAccepted.set(hasAcceptedAnalytics());
    }


</script>
