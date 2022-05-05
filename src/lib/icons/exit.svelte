<script>
    export let fill = "none"
    export let stroke = "#fff"
    export let title = ""
    let classMod;
    export { classMod as class };
</script>

<svg class="w-6 h-6 {classMod}" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
    <title>{title}</title>
    <path fill={fill} stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40m64-160l80 80l-80 80m-193-80h273"></path>
</svg>