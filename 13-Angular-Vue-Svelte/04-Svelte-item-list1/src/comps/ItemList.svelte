<script>
    import Item from './Item.svelte';
    export let items;
    export let deleteItem;
</script>

{#each items as item (item.id)}
    <Item item={item} deleteItem={deleteItem} />
{/each}