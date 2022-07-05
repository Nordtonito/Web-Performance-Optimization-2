## Report

Before my changes FP, FCP, FMP, LCP, DCL metrics are placed immediately after the CSS finishes loading. This means that the browser needs to wait for all CSS to load and get processed before do something else on the screen.

After applying the critical css approach FP, FCP, FMP, LCP, DCL metrics appear before the page requests the CSS, which means the browser doesn't need to wait for the CSS to load before rendering the page.