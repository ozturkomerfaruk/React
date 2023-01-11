<script>
    export let item;
    export let deleteItem;

    const {id, title} = item;
</script>

<div class="Item">
    <div class="itemText">{title}</div>
    <button class="delbtn" on:click={()=>deleteItem(id)}>X</button>
</div>
