// import { useSearchParams, useLocation, useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
// import { revise } from'../store/actions/tagsView'
function Test(props) {
//   const [searchParams, setSearchParams] = useSearchParams()
//   console.log(searchParams.get('id'))
//   const params = useParams()
//   const location = useLocation()
//   console.log(params)
//   console.log(location)
const onClickRevise =()=>{
      console.log(props);

  }
  return (
    <>
      <div>
        test页面修改redux中的值
        <input type="button" value="修改" onClick={onClickRevise}/>
      </div>
    </>
  )
}

const mapStateToProps = (state)=>{
    return{
        taglist:state.tagsView.taglist
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        // onRevise:(tag)=>dispatch(revise(tag))
    }
}

// export default Test
export default connect(mapStateToProps,mapDispatchToProps)(Test)
