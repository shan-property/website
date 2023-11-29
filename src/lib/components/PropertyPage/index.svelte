<script lang="ts">
	import Image from '../images/Image.svelte';

	interface $$Props extends Shan.Product {}

	$: ({ descriptionHtml, featuredImage, title } = $$props as $$Props);
</script>

<article class="container mx-auto lg:max-w-5xl xl:max-w-5xl 2xl:max-w-5xl">
	<Image
		class="my-8 aspect-video w-full object-cover sm:rounded-lg md:rounded-xl"
		src={featuredImage.url}
		alt={featuredImage.altText}
	/>
	<h1>{title}</h1>
	<p>{descriptionHtml}</p>
</article>
