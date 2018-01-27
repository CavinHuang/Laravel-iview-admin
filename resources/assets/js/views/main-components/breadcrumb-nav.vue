<template>
    <Breadcrumb>
        <BreadcrumbItem
            v-for="item in currentPath"
            :href="item.path"
            :key="item.name"
        >{{ item.title }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
export default {
    name: 'breadcrumbNav',
    props: {
        currentPath: Array
    },
    methods: {
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
            } else {
                return item.title;
            }
        }
    }
};
</script>

