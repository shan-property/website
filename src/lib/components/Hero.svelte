<script lang="ts">
	import image from '$lib/components/images/kyoshi-reyes-Ps_ujcY0oT8-unsplash.jpg';
	import { SLOGAN } from '$lib/config';
</script>

<figure class="relative">
	<img
		class="aspect-video h-[30vh] w-full object-cover object-center sm:h-[50vh] md:h-[70vh] lg:h-[90vh]"
		src={image}
		alt="Hero"
	/>
	<figcaption
		class="text-text-light border-l-2.5 bg-background-dark/10 absolute bottom-[12.5%] left-[7.5%] px-5 py-3 text-base font-medium backdrop-brightness-75 sm:text-lg"
	>
		{SLOGAN}
	</figcaption>
</figure>
