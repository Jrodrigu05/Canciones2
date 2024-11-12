export const Inicio = ()=>{
    return(
        <>
        <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Bienvenidos al Inicio</h1>
        <p className="lead text-body-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam cumque sequi maiores libero eaque eligendi, eius, quos commodi quo beatae distinctio laborum quia, mollitia alias neque odit! Blanditiis, maxime eveniet!</p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://ethic.es/wp-content/uploads/2023/03/imagen.jpg" alt="img" ></img>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://marketing4ecommerce.co/wp-content/uploads/2023/10/ias-generadoras-de-imagenes.jpg" alt="img" ></img>
          <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://noticias.atura.mx/api/ckfinder/files/la-imagen-y-su-importancia-para-comunicar-la%20noche-estrellada-vincent-van-gogh(1).jpeg" alt="img" ></img>
          <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
        </>
    )
}