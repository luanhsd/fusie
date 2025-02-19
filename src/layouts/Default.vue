<template>
    <el-container>
        <el-header>
            <LayoutHeader />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <LayoutSidebar />
            </el-aside>
            <el-container>
                <el-main>
                    <slot></slot>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
