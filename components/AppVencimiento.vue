<template>

    <div class="m-2">
        <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium  " :for="label">
            Fecha de vencimiento
        </label>
        <div class="flex">
            <app-input type="number" required placeholder="Dia" class="w-20" />
            <app-input type="number" required placeholder="Mes" class="w-20" />
            <app-input type="number" required placeholder="Año" class="w-20" />
        </div>

    </div>

</template>