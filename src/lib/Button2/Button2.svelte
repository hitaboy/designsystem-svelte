<script>
    import "../bstyles/styles.scss"
    import { createEventDispatcher } from 'svelte';
  
    export let primary = false;
    export let size = 'medium';
    export let label = '';
  
    const dispatch = createEventDispatcher();
     /**
     * Button click handler
     */
     function onClick(event) {
      dispatch('click', event);
    }
</script>

<div class="prova">
    <button
        type="button"
        class="bg-blue-700 p-4 rounded btn-primary"
        on:click={onClick}>
        {label}
    </button>
</div>

