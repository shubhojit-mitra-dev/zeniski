
"use client";
import FeatureCard from "./ui/featureCard";
import search from '@/assets/search.gif'
import increase from '@/assets/increase.gif'
import analytics from '@/assets/analytics.gif'
import calendar from '@/assets/calendar.gif'
import share from '@/assets/share.gif'


function Features() {

	const benefits = [
		{
			icon: search,
			title: "Organize with Ease",
			description: "Keep track of your tasks effortlessly with a sleek, AI-assisted interface tailored to your needs."
		},
		{
			icon: increase,
			title: "Boost Your Productivity",
			description: "Turn your to-do list into an exciting journey with gamification and experience points."
		},
		{
			icon: analytics,
			title: "Level Up Your Life",
			description: "Every completed task earns rewards, helping you progress in both life and Zeniski’s leaderboard."
		},
		{
			icon: calendar,
			title: "Stay on Schedule",
			description: "Integrate seamlessly with Google Calendar and never miss a task or deadline."
		},
		{
			icon: share,
			title: "Share and Inspire",
			description: "Post your achievements on LinkedIn and X directly from Zeniski to enhance your social presence."
		}
	];

	const threeElements = benefits.slice(0,3);
	const twoElements = benefits.slice(3,5);

	return (
		<div className="py-12 bg-black-900 h-screen flex flex-col gap-5 sm:gap-20">

			<div className="text-center">
				<h2 className="mt-20 md:mt-0 text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Powerful Features</h2>
				<p className="mt-5  leading-8  tracking-tight text-white ">Everything you need to boost your productivity and social presence</p>
			</div>
			<div className="sm:mx-24 mx-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 justify-center">
					{threeElements.map((benefit, index) => (
						<FeatureCard
							key={index}
							heading={benefit.title}
							subheading={benefit.description}
							icon={benefit.icon}
						/>
					))}
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8 justify-center lg:mx-52 my-3 sm:my-8">
					{twoElements.map((benefit, index) => (
						<FeatureCard
							key={index}
							heading={benefit.title}
							subheading={benefit.description}
							icon={benefit.icon}
						/>
					))}
				</div>
			</div>
		</div>

	)
}

export default Features