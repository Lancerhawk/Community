import { Routes, Route, Navigate } from 'react-router-dom';
import CSSSidebar from '../../../components/CourseSidebar/CSSSidebar';
import Intro from '../../../components/LearningContent/CSS/IntroCSS/Intro';
import CSSWorking from '../../../components/LearningContent/CSS/IntroCSS/CSSWorking';
import SyntaxCSS from '../../../components/LearningContent/CSS/IntroCSS/SyntaxCSS';
import Ways_to_add_CSS from '../../../components/LearningContent/CSS/IntroCSS/Ways_to_add_CSS';
import CSS_Comments from '../../../components/LearningContent/CSS/IntroCSS/CSS_Comments';
import CSS_Selectors from '../../../components/LearningContent/CSS/IntroCSS/CSS_Selectors';
import CSS_Specificity from '../../../components/LearningContent/CSS/IntroCSS/CSS_Specificity';
import CSS_BoxModel from '../../../components/LearningContent/CSS/CSS Properties/CSS_BoxModel';
import CSS_Colors from '../../../components/LearningContent/CSS/CSS Properties/CSS_Colors';
import CSS_Borders from '../../../components/LearningContent/CSS/CSS Properties/CSS_Borders';
import CSS_Backgrounds from '../../../components/LearningContent/CSS/CSS Properties/CSS_Backgrounds';
import CSS_Fonts from '../../../components/LearningContent/CSS/CSS Properties/CSS_Fonts';
import Text_Styling from '../../../components/LearningContent/CSS/CSS Properties/Text_Styling';
import CSS_Padding from '../../../components/LearningContent/CSS/CSS Properties/CSS_Padding';
import CSS_Margin from '../../../components/LearningContent/CSS/CSS Properties/CSS_Margin';
import CSS_Hover from '../../../components/LearningContent/CSS/CSS Properties/CSS_Hover';
import CSS_Cursors from '../../../components/LearningContent/CSS/CSS Properties/CSS_Cursors';
import CSS_Links from '../../../components/LearningContent/CSS/CSS Properties/CSS_Links';
import CSS_Combinators from '../../../components/LearningContent/CSS/CSS Properties/CSS_Combinators';
import CSS_Pseudo_Classes from '../../../components/LearningContent/CSS/CSS Properties/CSS_Pseudo_Classes';
import CSS_Buttons from '../../../components/LearningContent/CSS/CSS Properties/CSS_Buttons';
import CSS_Overflow from '../../../components/LearningContent/CSS/CSS Properties/CSS_Overflow';
import Float from '../../../components/LearningContent/CSS/CSS Properties/CSS_Float';
import CSS_important from '../../../components/LearningContent/CSS/CSS Properties/CSS_important';
import CSS_Size from '../../../components/LearningContent/CSS/CSS Properties/CSS_Size';
import CSS_Math_Functions from '../../../components/LearningContent/CSS/CSS Properties/CSS_Math_Functions';
import CSS_Positioning from '../../../components/LearningContent/CSS/CSS Properties/CSS_Positioning';
import CSS_Z_Index from '../../../components/LearningContent/CSS/CSS Properties/CSS_Z_Index';
import CSS_Forms from '../../../components/LearningContent/CSS/CSS Properties/CSS_Forms';
import CSS_Navbar from '../../../components/LearningContent/CSS/CSS Properties/CSS_Navbar';
import Display from '../../../components/LearningContent/CSS/CSS Designing/Display';
import FlexBox from '../../../components/LearningContent/CSS/CSS Designing/FlexBox';
import GridLayout from '../../../components/LearningContent/CSS/CSS Designing/GridLayout';
import MediaQueries from '../../../components/LearningContent/CSS/CSS Designing/MediaQueries';
import Transition from '../../../components/LearningContent/CSS/CSS Advance Topics/Transition';
import Transform from '../../../components/LearningContent/CSS/CSS Advance Topics/Transform';
import Shadows from '../../../components/LearningContent/CSS/CSS Advance Topics/Shadows';
import Animations from '../../../components/LearningContent/CSS/CSS Advance Topics/Animations';
import Pagination from '../../../components/LearningContent/CSS/CSS Advance Topics/Pagination';
import Gradients from '../../../components/LearningContent/CSS/CSS Advance Topics/Gradients';
function CssCourse() {

  return (
    <>
    <div>
      <CSSSidebar />
      <main style={{ width: '100%', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/learning/css/intro-to-css/introduction" replace />} />
          <Route path="/intro-to-css/introduction" element={<Intro />} />
          <Route path="/intro-to-css/working-of-css" element={<CSSWorking />} />
          <Route path="/intro-to-css/syntax-of-css" element={<SyntaxCSS />} />
          <Route path="/intro-to-css/ways-to-add-css" element={<Ways_to_add_CSS />} />
          <Route path="/intro-to-css/css-comments" element={<CSS_Comments />} />
          <Route path="/intro-to-css/css-selectors" element={<CSS_Selectors />} />
          <Route path="/intro-to-css/css-specificity" element={<CSS_Specificity />} />


          <Route path="/css-properties/box-model" element={<CSS_BoxModel />} />
          <Route path="/css-properties/css-colors" element={<CSS_Colors />} />
          <Route path="/css-properties/css-borders" element={<CSS_Borders />} />
          <Route path="/css-properties/css-backgrounds" element={<CSS_Backgrounds />} />
          <Route path="/css-properties/css-fonts" element={<CSS_Fonts />} />
          <Route path="/css-properties/css-text-styling" element={<Text_Styling />} />
          <Route path="/css-properties/css-padding" element={<CSS_Padding />} />
          <Route path="/css-properties/css-margin" element={<CSS_Margin />} />
          <Route path="/css-properties/css-hover" element={<CSS_Hover />} />
          <Route path="/css-properties/css-cursors" element={<CSS_Cursors />} />
          <Route path="/css-properties/css-links" element={<CSS_Links />} />
          <Route path="/css-properties/css-combinators" element={<CSS_Combinators />} />
          <Route path="/css-properties/css-pseudo-classes" element={<CSS_Pseudo_Classes />} />
          <Route path="/css-properties/css-buttons" element={<CSS_Buttons />} />
          <Route path="/css-properties/css-overflow" element={<CSS_Overflow />} />
          <Route path="/css-properties/css-float" element={<Float />} />
          <Route path="/css-properties/css-important" element={<CSS_important />} />
          <Route path="/css-properties/css-math-functions" element={<CSS_Math_Functions />} />
          <Route path="/css-properties/css-size" element={<CSS_Size />} />
          <Route path="/css-properties/css-positioning" element={<CSS_Positioning />} />
          <Route path="/css-properties/css-z-index" element={<CSS_Z_Index />} />
          <Route path="/css-properties/css-forms" element={<CSS_Forms />} />
          <Route path="/css-properties/css-navbar" element={<CSS_Navbar />} />


          <Route path="/css-designing/css-display" element={<Display />} />
          <Route path="/css-designing/flexbox-layout" element={<FlexBox />} />
          <Route path="/css-designing/grid-layout" element={<GridLayout />} />
          <Route path="/css-designing/media-queries" element={<MediaQueries />} />

          <Route path="/css-advance/css-transitions" element={<Transition/>} />
          <Route path="/css-advance/css-transform" element={<Transform />} />
          <Route path="/css-advance/shadows" element={<Shadows />} />
          <Route path="/css-advance/animations" element={<Animations />} />
          <Route path="/css-advance/pagination" element={<Pagination />} />
          <Route path="/css-advance/gradient" element={<Gradients />} />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default CssCourse;