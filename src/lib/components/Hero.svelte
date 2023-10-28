<script lang="ts">
	import image from '$lib/components/images/kyoshi-reyes-Ps_ujcY0oT8-unsplash.jpg';
	import { SLOGAN } from '$lib/config';
</script>

<figure class="relative mb-10">
	<img
		class="aspect-video h-[30vh] w-full object-cover object-center sm:h-[50vh] md:h-[70vh] lg:h-[90vh]"
		src={image}
		alt="Hero"
	/>
	<figcaption
		class="absolute bottom-[12.5%] left-[7.5%] border-l-2.5 bg-bg-dark/10 px-5 py-3 text-base font-medium text-text-light backdrop-brightness-75 sm:text-lg"
	>
		{SLOGAN}
	</figcaption>
</figure>
