import React from "react";
import { Helmet } from "react-helmet";

// Importación de estilos locales
import "../css/pe-icon-7-stroke.css";
import "../js/plugins/responsive-lightbox/assets/nivo/nivo-lightbox.min.css";
import "../js/plugins/responsive-lightbox/assets/nivo/themes/default/default.css";
import "../js/plugins/revslider/public/assets/css/settings.css";
import "../css/bootstrap.css";
import "../js/plugins/owl-carousel/owl.carousel.css";
import "../js/plugins/owl-carousel/owl.theme.css";
import "../css/style.css";
import "../css/responsivedc98.css";
import "../css/animations.css";
import "../css/mega-menu.css";
import "../css/mega-menu-responsive.css";
import "../js/plugins/select2/select2.css";
import "../css/offcanvasmenu.css";
import "../css/nanoscroller.css";
import "../css/hover.css";
import "../js/plugins/thickbox/thickbox.css";
import "../js/plugins/js_composer/assets/css/js_composer.min.css";
import "../css/css-skin.css";
import "../js/plugins/js_composer/assets/css/lib/vc-open-iconic/vc_openiconic.min.css";
import "../js/plugins/js_composer/assets/css/lib/typicons/src/font/typicons.min.css";
import "../js/plugins/js_composer/assets/css/lib/vc-entypo/vc_entypo.min.css";
import "../js/plugins/js_composer/assets/css/lib/vc-linecons/vc_linecons_icons.min.css";
import "../js/plugins/js_composer/assets/css/lib/monosocialiconsfont/monosocialiconsfont.min.css";
import "../js/plugins/js_composer/assets/css/lib/vc-material/vc_material.min.css";
import "../js/plugins/js_composer/assets/css/js_composer_tta.min.css";
import "../css/slick.css";
import "../css/slick-theme.css";

const HeadComponent: React.FC = () => {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Íconos y favicons */}
      <link rel="icon" href="upload/cropped-favicon-32x32.png" sizes="32x32" />
      <link
        rel="icon"
        href="upload/cropped-favicon-192x192.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="upload/cropped-favicon-180x180.png"
      />
      <meta
        name="msapplication-TileImage"
        content="upload/cropped-favicon-270x270.html"
      />

      {/* Fuentes de Google */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Nunito:400,300,200,500|Poppins:300|Open+Sans:300"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy:400|Cabin:400|Alex+Brush:400"
      />
    </Helmet>
  );
};

export default HeadComponent;
