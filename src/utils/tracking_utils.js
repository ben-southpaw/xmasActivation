    export let TrackingUtils = {

        //Todo Tommy Template remove if other client!


    InitializeDigitalData: (market) => {
        window.digitalData = {
            page: {
                pageInfo: {
                    pageName: 'ShoppingApointment'
                },
                category: {
                    pageType: 'campaign'
                }
            },
            product: [],
            site: {
                attributes: {
                    storeBrand: 'tommyhilfiger',
                    storeCountry: market
                }
            },
            campaign: {
                campaignType: 'BookingToolRecovery',
                campaignId: 'ShoppingApointment'
            }
        };
    },

    InitializeUTAG: (environment, store) => {
        setTimeout(() => {
            //environment = "prod";
            (function (a, b, c, d) {
                a = `https://tags.tiqcdn.com/utag/pvh/tommyhilfiger-eu/${environment}/utag.js`;
                b = document;
                c = 'script';
                d = b.createElement(c);
                d.src = a;
                d.type = 'text/java' + c;
                d.async = true;
                a = b.getElementsByTagName(c)[0];
                a.parentNode.insertBefore(d, a);

            })();

            !(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod
                        ? n.callMethod.apply(n, arguments)
                        : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(
                window,
                document,
                'script',
                'https://connect.facebook.net/en_US/fbevents.js'
            );
        }, 1000);

    }
}