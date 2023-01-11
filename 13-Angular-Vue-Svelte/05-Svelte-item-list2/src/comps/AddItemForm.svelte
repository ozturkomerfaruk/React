<script>
    import {addItem} from '../stores/items.js'

    let title = ''
    let displayErrorMsg = false;

    const onSubmit = (e) => {
        e.preventDefault();
    
        title = title.trim();
        
        if (title === ""){
            setTimeout(()=>{displayErrorMsg = false}, 1000);
           displayErrorMsg = true;
        } else {
            addItem(title)
        } //end-else

       title = '';
  } //end-onSubmit
</script>

<form id="AddItemForm" on:submit|preventDefault={(e)=>onSubmit(e)}>
    {#if displayErrorMsg}
        <div class="error">Please enter a title before pressing Submit</div>        
    {/if}

    <div>
        <label for="title"><strong>Item Title: </strong></label>
        <input type="text" bind:value={title}/>
    </div>
    <input class="btn" type="submit" value="Add Item"/>      
</form>
