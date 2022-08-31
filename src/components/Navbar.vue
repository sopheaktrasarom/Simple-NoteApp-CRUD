<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const awesome = ref(false);

const navbaMenuRef = ref(null);
const navbarBurgerRef = ref(null);
function toggle() {
	awesome.value = !awesome.value;
}
onClickOutside(
	navbaMenuRef,
	() => {
		awesome.value = false;
	}
	// {
	// 	ignore: [navbarBurgerRef],
	// }
);
</script>
<template>
	<div class="nav" :class="{ active: awesome }">
		<div class="nav_container">
			<a href="" class="nav-logo">
				<h1 class="nav-title">My Note</h1>
			</a>
			<div class="nav_wrapper">
				<ul class="nav_list">
					<li>
						<router-link to="/" class="navlink">Notes</router-link>
					</li>
					<li>
						<router-link to="stats" class="navlink"
							>Stats
						</router-link>
					</li>
				</ul>
			</div>

			<div class="icon" @click="toggle" ref="navbaMenuRef">
				<div v-if="!awesome">
					<span class="iconify" data-icon="bx:menu"></span>
				</div>
				<div v-else>
					<span class="iconify" data-icon="bx:x"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.nav {
	background-color: dodgerblue;
}

.nav_container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.nav * {
	color: #fff;
}

.iconify {
	display: block;
	font-size: 35px;
	pointer-events: none;
}

.nav_list {
	display: flex;
}

/* mobile first */
@media (max-width: 767.98px) {
	.nav-logo,
	.icon {
		padding: 10px 25px;
		cursor: pointer;
	}

	.nav_wrapper {
		position: absolute;
		top: 58px;
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		left: -100%;
		background-color: #fff;
		padding-inline: 25px;
		padding-bottom: 50px;
		transition: 0.5s;
	}

	.active .nav_wrapper {
		left: 0;
	}

	.nav_wrapper * {
		color: #000;
	}

	.nav_list {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}

.link-active {
	color: #ffff;
	font-weight: 700;
	background-color: rgba(128, 128, 128, 0.301);
}

@media (min-width: 768px) {
	.nav_container {
		width: 80%;
		margin: auto;
	}

	.icon {
		display: none;
	}

	.navlink {
		padding: 10px 25px;
	}
}
</style>
