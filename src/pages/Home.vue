<template>
    <h1>Hello World!</h1>
    <el-button type="primary">primary</el-button>
    <el-button type="success">success</el-button>
    <VueFlow :nodes="initialNodes" :style="{ overflow: 'hidden', height: '90%' }">
        <Panel position="top-center">
            <button type="button" @click="onAddNode">Add a node</button>
            <button type="button" @click="onAddNodes">Add multiple nodes</button>
        </Panel>
    </VueFlow>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Node } from "@vue-flow/core";
import { Panel, VueFlow, useVueFlow } from "@vue-flow/core";

const initialNodes = ref<Node[]>([
    {
        id: "1",
        position: { x: 50, y: 50 },
        data: { label: "Node 1" },
    },
]);
const { addNodes } = useVueFlow();

function generateRandomNode() {
    return {
        id: Math.random().toString(),
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        label: "Random Node",
        data: {
            hello: "world",
        },
        class: "my-custom-node-class",
    };
}

function onAddNode() {
    addNodes(generateRandomNode());
}

function onAddNodes() {
    addNodes(Array.from({ length: 10 }, generateRandomNode));
}
</script>
