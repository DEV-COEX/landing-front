<template>
  <div>
    <section
      class="
        h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
        relative
      "
    >
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        COEX MODEL:
      </div>
      <div class="max-w-[42%] text-center text-3xl text-white py-8 leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta
        fuga culpa, voluptas incidunt omnis maxime, sapiente dignissimos
        consequatur possimus placeat facere exercitationem tempora rem minima
        impedit quibusdam. Sint, corrupti.
      </div>
      <div class="absolute bottom-28">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="28"
          viewBox="0 0 33 28"
          fill="none"
        >
          <path d="M16.5 28L32.5215 0.25H0.478531L16.5 28Z" fill="#FFB800" />
        </svg>
      </div>
    </section>
    <section
      class="h-screen bg-[#1C233A] flex flex-col justify-center items-center"
    >
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        Nuestra historia:
      </div>
      <div class="max-w-[42%] text-center text-3xl text-white py-8 leading-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta
        fuga culpa, voluptas incidunt omnis maxime, sapiente dignissimos
        consequatur possimus placeat facere exercitationem tempora rem minima
        impedit quibusdam. Sint, corrupti.
      </div>
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        Nuestra misión:
      </div>
      <div class="max-w-[42%] text-center text-3xl text-white py-8 leading-10">
        Plata o plomoooooo xdddd carlos agarra pitos que geeeiii
      </div>
    </section>
    <section
      class="
        h-auto
        py-40
        bg-gradient-to-br
        from-[#000A65]
        via-[#321586]
        to-[#474EFF]
      "
    >
      <div class="flex flex-col items-center">
        <div
          class="flex flex-col items-center w-[70%] rounded-[40px] px-10 py-12"
          style="background: rgba(47, 50, 125, 0.2)"
        >
          <div
            class="
              font-extrabold
              text-transparent text-6xl
              leading-[68px]
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
            "
          >
            Nuestros primeros talentos COEX:
          </div>
          <div class="w-full flex justify-center">
            <app-talents-card
              :name="'NataFit'"
              :job="'Cliente'"
              :image="'https://i.pravatar.cc/300?img=1'"
            />
            <app-talents-card
              :name="'Yonitiso'"
              :job="'TI-E-SO'"
              :image="'https://i.pravatar.cc/300?img=2'"
            /><app-talents-card
              :name="'Juan ekis'"
              :job="'Maincra'"
              :image="'https://i.pravatar.cc/300?img=3'"
            />
            <app-talents-card
              :name="'Tomas'"
              :job="'Pedir Apis'"
              :image="'https://i.pravatar.cc/300?img=4'"
            /><app-talents-card
              :name="'Psicoloca'"
              :job="'Cliente'"
              :image="'https://i.pravatar.cc/300?img=5'"
            />
            <app-talents-card
              :name="'Waskeador'"
              :job="'Wasker baños'"
              :image="'https://i.pravatar.cc/300?img=6'"
            />
          </div>
          <app-btn
            class="
              bg-gradient-to-r
              mt-2
              from-red-500
              to-red-400
              p-1
              mx-6
              text-white
              hover:from-red-400 hover:to-red-500
            "
            >Ser talento COEX</app-btn
          >
        </div>
      </div>

      <div class="flex flex-col items-center mt-14">
        <div class="flex flex-col items-center w-[80%] rounded-[40px] py-12">
          <div
            class="
              font-extrabold
              pb-3
              text-transparent text-6xl
              leading-[68px]
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
            "
          >
            Nuestro Equipo:
          </div>
          <div class="w-full grid grid-cols-3 justify-center h-full">
            <app-talents-card
              :name="'NataFit'"
              :job="'Cliente'"
              :image="'https://i.pravatar.cc/300?img=1'"
              :details="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta quas ratione illum architecto asperiores temporibus reiciendis labore, corrupti adipisci mollitia odio. Voluptas laboriosam velit quas consequatur repellendus incidunt fuga?'"
            />
            <app-talents-card
              :name="'Yonitiso'"
              :job="'TI-E-SO'"
              :image="'https://i.pravatar.cc/300?img=2'"
              :details="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta quas ratione illum architecto asperiores temporibus reiciendis labore, corrupti adipisci mollitia odio. Voluptas laboriosam velit quas consequatur repellendus incidunt fuga?'"
            />
            <app-talents-card
              :name="'JuanMaincra'"
              :job="'Montar Servers del maincra'"
              :image="'https://i.pravatar.cc/300?img=3'"
              :details="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta quas ratione illum architecto asperiores temporibus reiciendis labore, corrupti adipisci mollitia odio. Voluptas laboriosam velit quas consequatur repellendus incidunt fuga?'"
            />
            <app-talents-card
              :name="'Tomas'"
              :job="'Pedir Apis'"
              :image="'https://i.pravatar.cc/300?img=4'"
              :details="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta quas ratione illum architecto asperiores temporibus reiciendis labore, corrupti adipisci mollitia odio. Voluptas laboriosam velit quas consequatur repellendus incidunt fuga?'"
            />
            <app-talents-card
              :name="'Psicoloca'"
              :job="'Cliente'"
              :image="'https://i.pravatar.cc/300?img=5'"
              :details="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta quas ratione illum architecto asperiores temporibus reiciendis labore, corrupti adipisci mollitia odio. Voluptas laboriosam velit quas consequatur repellendus incidunt fuga?'"
            />
            <app-talents-card
              :name="'Waskeador'"
              :job="'Wasker baños'"
              :image="'https://i.pravatar.cc/300?img=6'"
              :details="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta quas ratione illum architecto asperiores temporibus reiciendis labore, corrupti adipisci mollitia odio. Voluptas laboriosam velit quas consequatur repellendus incidunt fuga?'"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="
        min-h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
      "
    >
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          mb-8
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        Founders
      </div>
      <app-founder-card :image="'https://i.pravatar.cc/300?img=10'" :name="'Valesita'" :job="'Asencer a cliente'" :descript="'Bfa de NataFit'" :about="'Lorem ipsus maracus asdasd as dasd asdmas da sd  as d  as d asd  as dasdasd asdasd '"  class="mb-[10rem]"/>
    </section>
  </div>
</template>

<script>
import AppTalentsCard from '~/components/AppTalentsCard.vue'
export default {
  components: { AppTalentsCard },
  name: 'IndexPage',
}
</script>

<style>
</style>
