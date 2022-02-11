// utils
const animatableCssProps = ["-moz-outline-radius","-moz-outline-radius-bottomleft","-moz-outline-radius-bottomright","-moz-outline-radius-topleft","-moz-outline-radius-topright","-webkit-text-fill-color","-webkit-text-stroke","-webkit-text-stroke-color","animation-timing-function","all","backdrop-filter","background","background-color","background-position","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-width","border-color","border-left","border-left-color","border-left-width","border-radius","border-right","border-right-color","border-right-width","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-width","border-width","bottom","box-shadow","caret-color","clip","clip-path","color","column-count","column-gap","column-rule","column-rule-color","column-rule-width","column-width","columns","filter","flex","flex-basis","flex-grow","flex-shrink","font","font-size","font-size-adjust","font-stretch","font-variation-settings","font-weight","grid-column-gap","grid-gap","grid-row-gap","height","left","letter-spacing","line-height","margin","margin-bottom","margin-left","margin-right","margin-top","mask","mask-border","mask-position","mask-size","max-height","max-width","min-height","min-width","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","outline","outline-color","outline-offset","outline-width","padding","padding-bottom","padding-left","padding-right","padding-top","perspective","perspective-origin","right","scroll-snap-coordinate","scroll-snap-destination","shape-image-threshold","shape-margin","shape-outside","tab-size","text-decoration","text-decoration-color","text-emphasis","text-emphasis-color","text-indent","text-shadow","top","transform","transform-origin","vertical-align","visibility","width","word-spacing","z-index"]

const copyTextToClipboard = (text, cb) => {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    if(successful) cb();
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

const jsonToCss = (ary, className="animated", frameName="demoFrames") => {
  if(!ary.length) return false;
  const totaltime = ary.reduce((total, prop)=>total+parseFloat(prop.duration), 0)
  const classStr = ` .${className}{
    animation: ${frameName} ${Math.round(totaltime, 3)}s both;
  }`
  
  let frameStr = `@keyframes ${frameName} {`
  
  const propsToStr = props => Object.keys(props).reduce((str, propKey)=>{
      return str+=`${propKey}: ${props[propKey]};`
   }, '')
  switch(true){
    case ary.length === 1:
      frameStr += `to { ${propsToStr(ary[0].props)} }`
      break;
    case ary.length === 2:
      frameStr += `
       from { ${propsToStr(ary[0].props)} }
       to { ${propsToStr(ary[1].props)} }
      `
      break;
    case ary.length >=3:
      let percent = 0;
      ary.forEach((frame, i)=>{
        if(i === 0){
          frameStr += `0% {`
        }else if( i === ary.length - 1){
          frameStr += `100% {`
        }else{
          percent = percent + Math.floor(frame.duration / totaltime * 100)
          frameStr += `${percent}% {`
        }
        
        frameStr += propsToStr(frame.props)
        frameStr += `}`
      })
      break;
  }
  
  frameStr += `}`
  return css_beautify(csso.minify(classStr + frameStr).css);
}

// presets
const presets = {
  custom: [],
  bounce: [
    {
      duration: 0,
      props: {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.2,
      props: {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.4,
      props: {
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'transform': 'translate3d(0, -30px, 0)'
      }
    },
    {
      duration: 0.03,
      props: {
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'transform': 'translate3d(0, -30px, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.17,
      props: {
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'transform': 'translate3d(0, -15px, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        'transform': ' translate3d(0, -4px, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'transform': 'translate3d(0, 0, 0)'
      }
    }
  ],
  flash: [
    {
      duration: 0,
      props: {
        opacity: 1
      }
    },
    {
      duration: .25,
      props: {
        opacity: 0
      }
    },
    {
      duration: .25,
      props: {
        opacity: 1
      }
    },
    {
      duration: .25,
      props: {
        opacity: 0
      }
    },
    {
      duration: 0.25,
      props: {
        opacity: 1
      }
    }
  ],
  pulse: [
    {
      duration: 0,
      props: {
        transform: 'scale3d(1, 1, 1)'
      }
    },
    {
      duration: .5,
      props: {
        transform: 'scale3d(1.05, 1.05, 1.05)'
      }
    },
    {
      duration: .5,
      props: {
        transform: 'scale3d(1, 1, 1)'
      }
    }
  ],
  rubberBand: [
    {
      duration: 0,
      props: {
        transform: 'scale3d(1, 1, 1)'
      }
    },
    {
      duration: .3,
      props: {
        transform: 'scale3d(1.25, 0.75, 1)'
      }
    },
    {
      duration: .1,
      props: {
        transform: 'scale3d(0.75, 1.25, 1)'
      }
    },
    {
      duration: .1,
      props: {
        transform: 'scale3d(1.15, 0.85, 1)'
      }
    },
    {
      duration: .05,
      props: {
        transform: 'scale3d(0.95, 1.05, 1)'
      }
    },
    {
      duration: .1,
      props: {
        transform: 'scale3d(1.05, 0.95, 1)'
      }
    },
    {
      duration: .25,
      props: {
        transform: 'scale3d(1, 1, 1)'
      }
    }
  ],
  shake: [
    {
      duration: 0,
      props: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(-10px, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(10px, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(-10px, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(10px, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(-10px, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(10px, 0, 0)'
      }
    },
    {
      duration: 0.1,
      props: {
        transform: 'translate3d(0, 0, 0)'
      }
    }
  ],
  swing: [
    {
      duration: 0,
      props: {
        'transform-origin': 'top center'
      }
    },
    {
      duration: 0.2,
      props: {
        transform: 'rotate3d(0, 0, 1, 15deg)'
      }
    },
    {
      duration: 0.2,
      props: {
        transform: 'rotate3d(0, 0, 1, -10deg)'
      }
    },
    {
      duration: 0.2,
      props: {
        transform: 'rotate3d(0, 0, 1, 5deg)'
      }
    },
    {
      duration: 0.2,
      props: {
        transform: 'rotate3d(0, 0, 1, -5deg)'
      }
    },
    {
      duration: 0.2,
      props: {
        transform: 'rotate3d(0, 0, 1, 0deg)'
      }
    }
  ],
  tada: [
    {
      duration: 0,
      props:{
        transform: 'scale3d(1, 1, 1)'
      }
    },
    {
      duration: 0.2,
      props:{
        transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
      }
    },
    {
      duration: 0.1,
      props:{
        transform: 'scale3d(1, 1, 1)'
      }
    }
  ],
  jello: [
    {
      duration: 0, 
      props: {
        'transform-origin': 'center',
        transform: 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'translate3d(0, 0, 0)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(-12.5deg) skewY(-12.5deg)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(6.25deg) skewY(6.25deg)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(-3.125deg) skewY(-3.125deg)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(1.5625deg) skewY(1.5625deg)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(0.390625deg) skewY(0.390625deg)'
      }
    },
    {
      duration: 0.11, 
      props: {
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
      }
    },
    {
      duration: 0.22, 
      props: {
        transform: 'translate3d(0, 0, 0)'
      }
    }
  ]
}

// components
const Styles = ({children}) => ReactDOM.createPortal(
    children,
    document.getElementById('withlove')
);

// apps
class App extends React.Component {
  state={
    animationName: 'animated',
    replay: false,
    adding: false,
    editing: false,
    frames: presets['bounce'],
    newProps: {},
    newDuration: 1,
    newPropKey: 'height',
    newPropValue: '',
    copy: false,
  }

  componentDidMount(){
    hljs.highlightBlock(this.refs.code);
  }

  componentDidUpdate(prevProps){
    hljs.highlightBlock(this.refs.code);
  }

  replayAnimation(){
    this.setState({
      replay: true
    }, ()=>{
      setTimeout(()=>this.setState({
        replay: false
      }), 100)
    })
  }

  render(){
    const { frames, animationName, replay, adding, editing, newDuration, newPropKey, newPropValue, newProps, copy } = this.state;
    const code = jsonToCss(frames)
    
    return (
      <div className="App">
        <div className="App__sidebar">
          <h2>Animation</h2>
          <div className="App--presetPicker">
            Preset:
          <select 
            defaultValue="bounce"
            onChange={e=>{
              this.setState({ frames: presets[e.target.value]}, ()=>{
                this.replayAnimation()
              })      
            }}
            >
            {
              Object.keys(presets).map(preset=>(
                <option key={preset} value={preset}>{preset}</option>
              ))
            }
          </select>
          </div>
          <button 
            className="dash white"
            onClick={()=>this.setState({ adding: !adding })}
            >
            + Add Frame
          </button>
          <div className="App__frames">
            {
              frames.map((frame, i)=>{
                return (
                  <p key={i} className="App__frames-frame"
                    onClick={()=>{
                      this.setState({
                        editing: i+1,
                        newProps: frame.props,
                        newDuration: frame.duration
                      })
                    }}  
                  >
                    <button
                      className="white"
                      onClick={()=>{
                        let $frames = frames.slice()
                        if($frames.length === 1) $frames = []
                        else $frames = $frames.slice(i, 1)
                        this.setState({
                          frames: $frames
                        })
                      }}  
                    >x</button>
                    Frame {i} ({frame.duration}s)
                  </p>
                )
              })
            }
          </div>
          <div 
            className="App__sidebar__newAnimation"
            style={{
              bottom: adding || editing ? '0px' : '-350px'
            }}
          >
            <h4>Duration (s)</h4>
            <input type="number" value={newDuration} onChange={e=>this.setState({newDuration: e.target.value})}/>
            <h4>Properties {`{`}</h4>
            {
              Object.keys(newProps).map((propKey)=>{
                return (
                  <p className="cssprop" key={propKey}
                    onClick={()=>{
                      this.setState({
                        newPropKey: propKey,
                        newPropValue: newProps[propKey]
                      })
                    }}  
                  >
                    <button
                      onClick={()=>{
                        let props = Object.assign({}, newProps);
                        delete props[propKey];
                        this.setState({
                          newProps: props
                        })
                      }}  
                    >x</button>
                    <span>{propKey}</span>:<b>{newProps[propKey]}</b>;
                  </p>
                )
              })
            }
            <p className="newProperty" >
              <select 
                value={newPropKey}
                onChange={e=>this.setState({newPropKey: e.target.value})}>
                {
                  animatableCssProps.map(
                    prop=>
                      <option 
                        key={prop} 
                        value={prop}
                      >
                        {prop}
                      </option>
                  )
                }
              </select>
              :<input type="text" value={newPropValue}
                onChange={
                  e=>this.setState({newPropValue: e.target.value})
                }
                onBlur={
                  ()=>{
                    if(newPropValue){
                      let props = Object.assign({}, newProps);
                      props[newPropKey] = newPropValue
                      this.setState({
                        newPropKey: 'height',
                        newPropValue: '',
                        newProps: props
                      })
                    }
                  }
                }
              />
            </p>
            <h4>{`}`}</h4>
            <button className="white" 
              onClick={()=>this.setState({
                adding: false,
                editing: false,
                newProps:[],
                newPropKey: 'height',
                newPropValue: '',
                newDuration: 1,
              })}
              style={{ marginRight: '5px' }}>
              Cancel
            </button>
            <button className="white"
               onClick={()=>{
                let $frames = frames.slice();
                if(adding){
                  $frames.push({
                    duration: newDuration,
                    props: newProps
                  })
                }
                
                if(editing){
                  $frames[editing - 1] = {
                    duration: newDuration,
                    props: newProps
                  }
                }
                
                this.setState({
                  frames: $frames,
                  adding: false,
                  editing: false,
                  newProps:[],
                  newPropKey: 'height',
                  newPropValue: '',
                  newDuration: 1,
                })
              }}  
            >
              { adding && 'Add' }
              { editing && 'Edit' }
            </button>
          </div>
        </div>
        <div className="App__preview">
          <button className="App__preview--button" onClick={()=>this.replayAnimation()}>Replay</button>
          <div className="App__preview--stage">
            <div className={`App--dummy ${replay ? '' : animationName}`} />
          </div>
          <div className="App__preview--code">
            <button className="white" 
              onClick={()=>copyTextToClipboard(code, ()=>{
                this.setState({
                  copy: true
                }, ()=>setTimeout(
                  ()=>this.setState({ copy: false})
                , 1000))
              })}
            >
              {copy ? 'Copied!' : 'Copy'}
            </button>
            <pre>
              <code ref="code" className="css">
                {code}
              </code>
            </pre>
          </div>
        </div>
        <Styles>
          {code}
        </Styles>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('made-with-react'))