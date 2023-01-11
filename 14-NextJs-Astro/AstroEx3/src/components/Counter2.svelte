<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<h3>A Svelte component rendered with client:load (CSR)</h3>
<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
