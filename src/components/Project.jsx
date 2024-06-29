import './project.css';



const Project = () => {
    return (
      <>
      <div className='title titleProject'>
        <h1>Our Project</h1>
      </div>

      <div className='rooms'>
        <button>bathroom</button>
        <button>Bed Room</button>
        <button>Kitchen</button>
        <button>Living Room</button>
      </div>

      <div className="cards">
        <div className="card">
          <img src="/bad2.png" alt="" />
          <h4>Bedroom</h4>
          <p>decor/architecture</p>
        </div>

        <div className="card">
          <img src="/bad1.png" alt="" />
          <h4>Bedroom</h4>
          <p>decor/architecture</p>
        </div>
      </div>


      
      
  


      </>
    )
  };
  
  export default Project;