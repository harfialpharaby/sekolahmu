<template>
  <b-container fluid class="text-left">
    <b-row>
      <b-col class="text-light" cols="2"></b-col>
      <b-col cols="9">
        <b-container>
          <b-row>
            <b-col>
              <p class="question">
                Tuliskan hasil dari console.log dari code block di bawah dan
                jelaskan!
              </p>
              <pre class="font-weight-bold">
              if(true){
                let first = 1;
              } 
              if(true){ 
                var second = 10; 
              }
            </pre
              >
            </b-col>
            <b-col cols="2" class="d-flex align-items-center">
              <router-link
                to="/frontend2"
                tag="div"
                class="w-50 font-weight-bold zoom-next"
              >
                NEXT CHALLENGE
              </router-link>
            </b-col>
          </b-row>
        </b-container>
        <hr class="bg-success" />
        <b-row>
          <b-col
            cols="2"
            class="text-light d-flex align-items-center font-weight-bold p-3"
            style="background-color: #19459B"
          >
            <div>
              <pre class="font-weight-light text-light" style="font-size:12px">
console.log(first);
              </pre>
              <p>Answer: first is not defined</p>
            </div>
          </b-col>
          <b-col cols="10" class="d-flex align-items-center">
            <p>
              Karena scope let adalah functional yang artinya variable hanya
              dapat diambil nilainya di dalam bracket tempat variable itu
              dibuat, sehingga jika variable yang dibuat menggunakan let
              dipanggil dari luar bracket paling luar maka akan menyebabkan
              error not defined pada variable.
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col
            cols="2"
            class="text-light d-flex align-items-center font-weight-bold"
            style="background-color: #19459B"
          >
            <div>
              <pre class="font-weight-light text-light" style="font-size:12px">
console.log(second);
              </pre>
              <p>Answer: 10</p>
            </div>
          </b-col>
          <b-col cols="10" class="d-flex align-items-center">
            <div>
              <p>
                Berbeda dengan var dimana mengabaikan scope sehinnga variable
                yang dideklarasi menggunakan var akan dapat diambil datanya dari
                luar scope dia dideklarasikan.
              </p>
              <p>
                Additional: bahkan ada hal yang unik dari pendeklarasian
                menggunakan var dimana variable yang dideklarasi menggunakan var
                tidak akan error bahkan jika diambil nilainya sebelum variable
                dideklarasikan.
              </p>
              <p>contoh case:</p>
              <pre class="font-weight-bold">
                console.log(second);
                if (true) {
                  var second = 10;
                }
              </pre>
              <p>
                code diatas tidak error meskipun menghasilkan nilai
                <span class="font-italic">undefined</span>.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
