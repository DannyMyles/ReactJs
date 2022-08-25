import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HookCounterThree from './components/Hooks/HookCounterThree';
// import HookIncreDecrement from './components/Hooks/HookIncreDecrement';
// import ClassCounter from './components/Hooks/ClassCounter';
// import PostToApi from './components/HTTP/PostToApi';
// import PostLists from './components/HTTP/PostLists';
// import Counter from './components/RenderProps/Counter';
// import ClickCounterII from './components/RenderProps/ClickCounterII';
// import ClickCounterII from './components/RenderProps/ClickCounterII';
// import HooverCounterII from './components/RenderProps/HooverCounterII';
// import User from './components/RenderProps/User';
// import HoverCounter from './components/HigherOrder/HoverCounter';
// import ClickCounter from './components/HigherOrder/ClickCounter';
// import Hero from './components/Refs/Error/Hero';
// import ForwardInputParent from './components/Refs/ForwardInputParent';
// import Input from './components/Refs/Input';
// import FocusInput from './components/Refs/FocusInput';
// import RefsDemo from './components/Refs/RefsDemo';
// import PureComponet from './components/PureComponent/PureComponet';
// import Table from './components/Fragments/Table';
// import FragmentDemo from './components/Fragments/FragmentDemo';
// import Mount from './components/LifeCycleMethods/Mount';
// import Form from './components/Forms/Form';
// import StyleSheet from './components/Styles/StyleSheet';
// import NameList from './components/Lists/NameList';
// import CheckUserLogedIn from './components/ConditionalRendering/CheckUserLogedIn';
// import ParentComponent from './components/MethodAsProps/ParentComponent';
// import EventBind from './components/EventBind';
// import ClassClickEvent from './components/ClassClickEvent';
// import FunctionClickEvent from './components/FunctionClickEvent';
// import Destructure from './components/Destructure';
// import Counter from './components/Counter';
// import Message from './components/Message';
// import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App container ">

      <HookCounterThree />
      {/* <HookIncreDecrement /> */}
      {/* <ClassCounter /> */}
      {/* <PostToApi /> */}
      {/* <PostLists /> */}
      {/* < Counter>
        {(count,incrementCount)=><ClickCounterII count={count} incrementCount={incrementCount}/>}
      </Counter>
      < Counter> ////.............Render Props.................
        {(count,incrementCount)=><HooverCounterII count={count} incrementCount={incrementCount}/>}
      </Counter> */}
      {/* <User name={(isLoggedIn)=> isLoggedIn ? 'Danny' : 'Guest'}/>
      <HooverCounterII />
      <ClickCounterII /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter name='Danny' /> */}
      {/* <Hero heroname="Batman"></Hero> */}
      {/* <Hero heroname="Superman"></Hero> */}
      {/* <ForwardInputParent /> */}
      {/* <FocusInput /> */}
      {/* <Input /> */}
      {/* <RefsDemo /> */}
      {/* <PureComponet /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
      {/* <Mount /> */}
      {/* <StyleSheet primary ={true}/> */}
      {/* <NameList /> */}
      {/* <CheckUserLogedIn /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <ClassClickEvent /> */}
      {/* <FunctionClickEvent /> */}
      {/* <Destructure  name='Dan' heroName='Muhadi'/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
     {/* <Introduction name='Muhadi' heroName='Superman'/>
     <Introduction name='Myles'heroName='Footballer'/>
     <Introduction name='Danny'heroName='Marathonian'/> */}
    </div>
  );
}

export default App;

//We can also pass in a function as a prop to controll what is actually rendered by a component
// i.e instead of name="Danny"  use name={()=>'Danny'}
// Render prop is a technique for sharing code btn React components using a prop whose value is a function