    <section class="features" id="features">

      <div class="container">
      
        <div class="text-center">
          <h2>¿Tienes personalidad de millonario?</h2>

          {{-- <p class="text-muted">Check out what you can do with this app theme!</p> --}}
          <hr>
        </div>
        
      
        
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    {{-- <img src="img/demo-screen-1.jpg" class="img-fluid" alt=""> --}}
                    @include('sections.chat')
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid" id="game">
              <div class="row" >
                <div class="col-lg-6">
                  <div class="feature-item">
                    {{-- <i class="icon-screen-smartphone text-primary"></i> --}}
                    <img class="juego" src="img/juego/carro.jpeg"  id = "1">
                    {{-- <img src="img/poggo1_hello.png" /> --}}
                    
                    <p class="text-muted" id = "p_1">Un Carro</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    {{-- <i class="icon-camera text-primary"></i> --}}
                    <img class="juego" src="img/juego/15s.jpeg" id = "2">
                    
                    <p class="text-muted" id = "p_2">Hago los XV's de mi hija</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    {{-- <i class="icon-present text-primary"></i> --}}
                    <img class="juego" src="img/juego/ahorro.jpeg" id = "3">
                    <p class="text-muted" id = "p_3">Los ahorro</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    {{-- <i class="icon-lock-open text-primary"></i> --}}
                    <img class="juego" src="img/juego/educacion.jpeg" id = "4">
                    <p class="text-muted" id = "p_4">Un seguro para la educación de mis hijos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
