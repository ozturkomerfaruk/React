<script>
    import {filterItems} from '../stores/filterStr.js'
</script>

<div id="FilterItemForm">
    <label for="filter"><strong>Item filter:</strong></label>
    <input type="text" on:input={(e)=>filterItems(e.target.value)}/>
</div>
