<script>
    import Item from './Item.svelte';
    import {items, deleteItem} from '../stores/items.js'
    import {filterStr} from '../stores/filterStr.js'

    let items2Display
    $: {
        items2Display = $items
        if ($filterStr !== "")
          items2Display = $items.filter((item)=>{
              if (item.title.toLowerCase().indexOf($filterStr) >= 0) return true;
              else return false;
          });        
    }
</script>

{#each items2Display as item (item.id)}
    <Item item={item} deleteItem={deleteItem} />
{/each}