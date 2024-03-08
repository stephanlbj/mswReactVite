

const Wrapper = ({label}:{label:string}) => {
  return (
    <div style={{display:'flex', justifyContent:'center', 
    alignItems:'center', height:'100vh', fontSize:'28px'}}
    >
    <p>{label}</p>
    
    </div>
  )
}

export default Wrapper