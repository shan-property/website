<script lang="ts">
	export let title: string;
	export let featuredImage: {
		url: string;
		altText: string;
	};
</script>

<figure class="relative h-max w-64 min-w-[200px] bg-bg p-1 shadow">
	<img src={featuredImage.url} alt={featuredImage.altText} class="aspect-photo object-cover" />
	<figcaption
		class="absolute bottom-0 left-1 bg-gradient-to-tr from-bg to-bg/90 pe-1.5 ps-0.5 pt-0.5 font-serif text-lg font-bold"
	>
		{title}
	</figcaption>
</figure>
