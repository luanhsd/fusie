<template>
    <el-menu mode="horizontal" :ellipsis="false">
        <div class="flex w-full">
            <el-menu-item index="0" class="mr-auto">
                <img src="~/assets/img/fusie.png" alt="Fusie Logo" class="h-32 max-w-full" />
            </el-menu-item>

            <el-menu-item index="1">
                <NuxtLink to="/home">Home</NuxtLink>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>ISOs</template>
                <el-menu-item index="2-1">
                    <NuxtLink to="/9241">9241</NuxtLink>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <NuxtLink to="/15393">15393</NuxtLink>
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
                <NuxtLink to="/how">Como Usar ?</NuxtLink>
            </el-menu-item>
            <el-menu-item index="4">Calculadora</el-menu-item>
            <el-menu-item>
                <UtilsDarkMode />
            </el-menu-item>
        </div>
    </el-menu>
</template>
