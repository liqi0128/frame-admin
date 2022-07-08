import { Component } from 'react'
import './css.less'

class ReactPeriod extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('创建阶段');
    console.log('constructor');
  }
  static getDerivedStateFromProps(nextProps, preState) {
    console.log('getDerivedStateFromProps');
    // console.log('nextProps');
    // console.log(nextProps);
    // console.log('preState');
    // console.log(preState);
    return null
    return nextProps
    const { match: { params: { instrumentId } } } = nextProps;
    // 此处当传入的instrumentId发生变化的时候，更新state
    if (instrumentId !== preState.instrumentId) {
      //若需要在数据变化后进行其他操作，需要在return前操作！
      return {
        instrumentId: instrumentId,
      };
    }
    return null;    // 不变化，则对于state不进行任何操作
  }
  shouldComponentUpdate(nextProps, nextState) {
    //组件是否需要更新，需要返回一个布尔值，返回true则更新，返回flase不更新，这是一个关键点
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {//该方法返回的一个Snapshot值，作为componentDidUpdate第三个参数传入
    console.log('getSnapshotBeforeUpdate');
    return 'Snapshot';
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log('getSnapshotBeforeUpdate返回的值', snapshot);
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  onChangeCount() {
    console.log('触发事件');
    console.log(this.state.count);
    this.setState({
      count: ++this.state.count
    })
    this.setState((prevState, props) => { return { count: prevState.count + 1 }; }); 
    this.setState((prevState, props) => { return { count: prevState.count + 1 }; });
  }
  render() {
    console.log('render');
    return <div className='reactperiod'>
      <h2>react生命周期</h2>
      <button onClick={this.onChangeCount.bind(this)}>更新{this.state.count}</button>
      <div>
        <div className="edit-comment-hide">
          <table className="d-block user-select-contain" data-paste-markdown-skip="">
            <tbody className="d-block">
              <tr className="d-block">
                <td className="d-block comment-body markdown-body  js-comment-body">
                  <h2 dir="auto">一、是什么</h2>
                  <p dir="auto">生命周期<code className="notranslate">（Life Cycle）</code>的概念应用很广泛，特别是在经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”<code className="notranslate">（Cradle-to-Grave）</code>的整个过程</p>
                  <p dir="auto">跟<code className="notranslate">Vue</code>一样，<code className="notranslate">React</code>整个组件生命周期包括从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程</p>
                  <h2 dir="auto">二、流程</h2>
                  <p dir="auto">这里主要讲述<code className="notranslate">react16.4</code>之后的生命周期，可以分成三个阶段：</p>
                  <ul dir="auto">
                    <li>创建阶段</li>
                    <li>更新阶段</li>
                    <li>卸载阶段</li>
                  </ul>
                  <h3 dir="auto">创建阶段</h3>
                  <p dir="auto">创建阶段主要分成了以下几个生命周期方法：</p>
                  <ul dir="auto">
                    <li>constructor</li>
                    <li>getDerivedStateFromProps</li>
                    <li>render</li>
                    <li>componentDidMount</li>
                  </ul>
                  <h4 dir="auto">constructor</h4>
                  <p dir="auto">实例过程中自动调用的方法，在方法内部通过<code className="notranslate">super</code>关键字获取来自父组件的<code className="notranslate">props</code></p>
                  <p dir="auto">在该方法中，通常的操作为初始化<code className="notranslate">state</code>状态或者在<code className="notranslate">this</code>上挂载方法</p>
                  <h3 dir="auto">getDerivedStateFromProps</h3>
                  <p dir="auto">该方法是新增的生命周期方法，是一个静态的方法，因此不能访问到组件的实例</p>
                  <p dir="auto">执行时机：组件创建和更新阶段，不论是<code className="notranslate">props</code>变化还是<code className="notranslate">state</code>变化，也会调用</p>
                  <p dir="auto">在每次<code className="notranslate">render</code>方法前调用，第一个参数为即将更新的<code className="notranslate">props</code>，第二个参数为上一个状态的<code className="notranslate">state</code>，可以比较<code className="notranslate">props</code> 和 <code className="notranslate">state</code>来加一些限制条件，防止无用的state更新</p>
                  <p dir="auto">该方法需要返回一个新的对象作为新的<code className="notranslate">state</code>或者返回<code className="notranslate">null</code>表示<code className="notranslate">state</code>状态不需要更新</p>
                  <h3 dir="auto">render</h3>
                  <p dir="auto">类组件必须实现的方法，用于渲染<code className="notranslate">DOM</code>结构，可以访问组件<code className="notranslate">state</code>与<code className="notranslate">prop</code>属性</p>
                  <p dir="auto">注意： 不要在 <code className="notranslate">render</code> 里面 <code className="notranslate">setState</code>, 否则会触发死循环导致内存崩溃</p>
                  <h3 dir="auto">componentDidMount</h3>
                  <p dir="auto">组件挂载到真实<code className="notranslate">DOM</code>节点后执行，其在<code className="notranslate">render</code>方法之后执行</p>
                  <p dir="auto">此方法多用于执行一些数据获取，事件监听等操作</p>
                  <h3 dir="auto">更新阶段</h3>
                  <p dir="auto">该阶段的函数主要为如下方法：</p>
                  <ul dir="auto">
                    <li>getDerivedStateFromProps</li>
                    <li>shouldComponentUpdate</li>
                    <li>render</li>
                    <li>getSnapshotBeforeUpdate</li>
                    <li>componentDidUpdate</li>
                  </ul>
                  <h3 dir="auto">getDerivedStateFromProps</h3>
                  <p dir="auto">该方法介绍同上</p>
                  <h2 dir="auto">shouldComponentUpdate</h2>
                  <p dir="auto">用于告知组件本身基于当前的<code className="notranslate">props</code>和<code className="notranslate">state</code>是否需要重新渲染组件，默认情况返回<code className="notranslate">true</code></p>
                  <p dir="auto">执行时机：到新的props或者state时都会调用，通过返回true或者false告知组件更新与否</p>
                  <p dir="auto">一般情况，不建议在该周期方法中进行深层比较，会影响效率</p>
                  <p dir="auto">同时也不能调用<code className="notranslate">setState</code>，否则会导致无限循环调用更新</p>
                  <h3 dir="auto">render</h3>
                  <p dir="auto">介绍如上</p>
                  <h3 dir="auto">getSnapshotBeforeUpdate</h3>
                  <p dir="auto">该周期函数在<code className="notranslate">render</code>后执行，执行之时<code className="notranslate">DOM</code>元素还没有被更新</p>
                  <p dir="auto">该方法返回的一个<code className="notranslate">Snapshot</code>值，作为<code className="notranslate">componentDidUpdate</code>第三个参数传入</p>
                  <p dir="auto">此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态</p>
                  <h3 dir="auto">componentDidUpdate</h3>
                  <p dir="auto">执行时机：组件更新结束后触发</p>
                  <p dir="auto">在该方法中，可以根据前后的<code className="notranslate">props</code>和<code className="notranslate">state</code>的变化做相应的操作，如获取数据，修改<code className="notranslate">DOM</code>样式等</p>
                  <h3 dir="auto">卸载阶段</h3>
                  <h2 dir="auto">componentWillUnmount</h2>
                  <p dir="auto">此方法用于组件卸载前，清理一些注册是监听事件，或者取消订阅的网络请求等</p>
                  <p dir="auto">一旦一个组件实例被卸载，其不会被再次挂载，而只可能是被重新创建</p>
                  <h2 dir="auto">三、总结</h2>
                  <p dir="auto">新版生命周期整体流程如下图所示：</p>
                  {/* <p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/14ba70012bcf358b1e4a1ca697b0bc47a21781ffa08e7d705e7da383bde83366/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f36366339393963302d643337332d313165622d383566362d3666616337376330633962332e706e67"><img src="https://camo.githubusercontent.com/14ba70012bcf358b1e4a1ca697b0bc47a21781ffa08e7d705e7da383bde83366/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f36366339393963302d643337332d313165622d383566362d3666616337376330633962332e706e67" alt="" data-canonical-src="https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png" style="max-width: 100%;"></a></p> */}
                  <p dir="auto">旧的生命周期流程图如下：</p>
                  {/* <p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/18592db530b888d9046510481e359456a909bc2d66ff37e8f9fb7cb18cd7ac4b/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f64333739653432302d643337342d313165622d616239302d6439616538313462323430642e706e67"><img src="https://camo.githubusercontent.com/18592db530b888d9046510481e359456a909bc2d66ff37e8f9fb7cb18cd7ac4b/68747470733a2f2f7374617469632e7675652d6a732e636f6d2f64333739653432302d643337342d313165622d616239302d6439616538313462323430642e706e67" alt="" data-canonical-src="https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png" style="max-width: 100%;"></a></p> */}
                  <p dir="auto">通过两个图的对比，可以发现新版的生命周期减少了以下三种方法：</p>
                  <ul dir="auto">
                    <li>componentWillMount</li>
                    <li>componentWillReceiveProps</li>
                    <li>componentWillUpdate</li>
                  </ul>
                  <p dir="auto">其实这三个方法仍然存在，只是在前者加上了<code className="notranslate">UNSAFE_</code>前缀，如<code className="notranslate">UNSAFE_componentWillMount</code>，并不像字面意思那样表示不安全，而是表示这些生命周期的代码可能在未来的 <code className="notranslate">react </code>版本可能废除</p>
                  <p dir="auto">同时也新增了两个生命周期函数：</p>
                  <ul dir="auto">
                    <li>getDerivedStateFromProps</li>
                    <li>getSnapshotBeforeUpdate</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
}
export default ReactPeriod