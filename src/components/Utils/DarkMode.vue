<template>
    <el-switch v-model="$colorMode.preference" active-value="dark" inactive-value="light">
        <template #active-action>
            <font-awesome icon="moon" />
        </template>
        <template #inactive-action>
            <font-awesome icon="sun" color="gray" />
        </template>
    </el-switch>
</template>
