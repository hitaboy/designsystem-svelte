<script>
    export let fill = "#fff"
    export let title = ""
    let classMod;
    export { classMod as class };
</script>

<svg class="w-6 h-6 {classMod}" viewBox="0 0 24 24">
    <title>{title}</title>
    <path fill={fill} d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z">
    </path>
</svg>