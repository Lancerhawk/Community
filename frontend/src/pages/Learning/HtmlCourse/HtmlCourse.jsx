import { Routes, Route, Navigate } from 'react-router-dom';
import HTMLSidebar from '../../../components/CourseSidebar/HTMLSidebar';
import IntroHTML from '../../../components/LearningContent/HTML/IntroHTML/IntroHTML';
import StructureHTML from '../../../components/LearningContent/HTML/StructureHTML/StructureHTML';
import BasicTags from '../../../components/LearningContent/HTML/HTML Basic Tags Details/BasicTags';
import ElementsAttributes from '../../../components/LearningContent/HTML/HTML Elements, Attributes, Comments , ID & Classes/ElementsAttributes';
import BlockInline from '../../../components/LearningContent/HTML/HTML Block & Inline Elements/BlockInline';
import Lists from '../../../components/LearningContent/HTML/HTML Lists and Attributes/Lists';
import Tables from '../../../components/LearningContent/HTML/HTML Tables and Attributes/Tables';
import Forms from '../../../components/LearningContent/HTML/HTML Forms & Inputs & Attributes/Forms';
import Media from '../../../components/LearningContent/HTML/HTML Media Tags/Media';
import Canvas from '../../../components/LearningContent/HTML/Miscellaneous/Canvas/Canvas';
import CodeTag from '../../../components/LearningContent/HTML/Miscellaneous/CodeTag/CodeTag';
import CharacterTags from '../../../components/LearningContent/HTML/Miscellaneous/Character Tags/CharacterTags';
import Entities from '../../../components/LearningContent/HTML/Miscellaneous/Entities/Entities';
import GlobalAttribute from '../../../components/LearningContent/HTML/Miscellaneous/Global Attribute/GlobalAttribute';
import ObsoleteTags from '../../../components/LearningContent/HTML/Miscellaneous/Obsolete HTML tags/ObsoleteTags';
import QuotationTags from '../../../components/LearningContent/HTML/Miscellaneous/Quotation Tags/QuotationTags';
import SemanticTags from '../../../components/LearningContent/HTML/Miscellaneous/Semantic Tags/SemanticTags';
function HtmlCourse() {
  //   const { topic } = useParams();

  return (
    <>
      <div>
        <HTMLSidebar />
        <main style={{ width: '100%', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/learning/html/intro" replace />} />
            <Route path="/intro" element={<IntroHTML />} />
            <Route path="/structure" element={<StructureHTML />} />
            <Route path="/basic-tags" element={<BasicTags />} />
            <Route path="/elements-attributes" element={<ElementsAttributes />} />
            <Route path="/block-inline" element={<BlockInline />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/media" element={<Media />} />
            <Route path="/misc/canvas" element={<Canvas />} />
            <Route path="/misc/character-tags" element={<CharacterTags />} />
            <Route path="/misc/code-tag" element={<CodeTag />} />
            <Route path="/misc/entities" element={<Entities />} />
            <Route path="/misc/global-attribute" element={<GlobalAttribute />} />
            <Route path="/misc/obsolete-tags" element={<ObsoleteTags />} />
            <Route path="/misc/quotation-tags" element={<QuotationTags />} />
            <Route path="/misc/semantic-tags" element={<SemanticTags />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default HtmlCourse;