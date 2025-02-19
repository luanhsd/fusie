<template>
    <el-container class="flex flex-col h-screen">
        <el-header>
            <LayoutHeader />
        </el-header>
        <el-container class="flex flex-grow">
            <el-aside width="200px">
                <LayoutSidebar />
            </el-aside>
            <el-container class="flex flex-grow">
                <el-main class="flex-grow h-full w-full">
                    <slot></slot>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
