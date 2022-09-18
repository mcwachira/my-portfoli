import Document, {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
    render(){


        return (
            <Html lang='en'>
                <Head>


                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script
                        async
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,

            //     <!-- this line is used to supress
            //   the SameSite warning that will be throwed -->
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
                        }}
                    />
                </Head>
                <body>
                <Script>0</Script>
                    
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument