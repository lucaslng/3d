class Item {
	constructor (name, description, cost, modelScale = "1.5 1.5 1.5", modelRotation = "0 0 0") {
		this.name = name;
		this.description = description;
		this.cost = cost;
		this.modelScale = modelScale;
		this.modelRotation = modelRotation;
	}
}

const categories = ["Input", "Process", "Storage", "Output", "Control"];

const items = [
	[
		new Item("Keyboard", "Keyboards are the main and most important input for the computer. They allow users to type and control the computer. There are two main types of keyboards, membrane and mechanical", "20 - 50"),
		new Item("Mouse / Trackpad", "A mouse / trackpad is the other main input for the computer. They allow the user to control the computer through controlling a cursor on a screen as well as buttons on the mouse / trackpad. Trackpads mostly found on laptops.", "10 - 30"),
		new Item("Microphone", "A microphone allows the user to input audio information, usually through speaking. The two main types of microphones are shotgun and lavalier. Shotgun microphones are highly directional with more range whereas lavalier microphones have a much shorter range.", "20 - 50"),
		new Item("Web Camera", "A web camera allows the user to input a video signal into the computer through a camera. Many web cameras also contain microphones. Most laptops also contain inbuilt web cameras.", "30 - 70"),
	],
	[
		new Item("CPU (Central Processing Unit)", "The CPU is the main processor in a computer. It executes instructions given by computer programs. It is mainly used for day to day applications, logic, and mathematical calculations.", "100 - 500"),
		new Item("GPU (Graphics Processing Unit)", "The GPU does the processing for the graphics in a computer. Some computers do not have a dedicated GPU and instead the GPU is integrated into the CPU. Other than graphics, the GPU is also more optimized for AI applications and cryptocurrency mining.", "1000 - 2000"),
		new Item("Sound Card", "The sound card processes audio going in and out of the computer. Most modern computers have the sound card as part of the motherboard. However, some people still choose to install external sound cards as they provide better sound quality compared to the one in the motherboard.", "100 - 300"),
	],
	[
		new Item("RAM (Random Access Memory)", "The RAM stores information temporarily. It runs at high speeds and has a low latency. RAM is cleared when the computer is shut down. Most modern laptop and desktop computers have 8-32 gigabytes of RAM. GPUs also contain special type of RAM called VRAM dedicated to the GPU.", "30 - 60 for 16GB"),
		new Item("ROM (Read-only Memory)", "ROM is memory that cannot be modified after it is manufactured. It usually stores firmware, which is the basic software needed for computer parts to operate. ROM can be found on many different computer parts and electronic devices.", "Part of other components"),
		new Item("Hard Drive", "A hard drive stores large amounts of information but is slower than other methods of storage. It relies on a spinning disk which means that magnets can interfere with hard drives. Hard drives are less common among newer computers as SSDs are preferred", "90 - 140 for 2TB"),
		new Item("SSD (Solid State Drive)", "SSDs also store large amounts of information. They are faster, more compact, but also more expensive than hard drives. Unlike hard drives, SSDs have no moving parts", "120 - 200 for 2TB"),
		new Item("External Hard Drive", "External hard drives are hard drives that can be quickly connected and disconnected from a computer for portable storage. They can be useful for transferring files across computers. This is a peripheral device.", "100 - 150 for 2TB"),
	],
	[
		new Item("Printer", "A printer outputs colour/image data onto paper through ink. Multi-function printers can also act as an input and scan documents and copy documents.", "100 - 200"),
		new Item("Monitor", "A monitor is the display that the user uses to use the computer. A computer does not need a display to run. Different monitor types create the visible image through different ways, the most popular types are TN, IPS, MiniLED, and OLED. The monitor is connected to the GPU.", "100 - 200"),
		new Item("LCD Projector", "A monitor is the display that the user uses to use the computer. A computer does not need a display to run. Different monitor types create the visible image through different ways, the most popular types are TN, IPS, MiniLED, and OLED. The monitor is connected to the GPU.", "100 - 500"),
		new Item("Speaker", "Speakers output audio information to the user. They use vibration to create sounds of different amplitude and frequency. There are different types of speakers. Subwoofers focus more on the bass whereas tweeters focus more on the treble.", "50 - 200 depending on the quality and type of speaker"),
		new Item("3D Printer", "A 3D printer allows user to print 3D models using different types of plastic filament. 3D printers function by printing out liquid melted plastic that cools and solidifies. There are many different types of plastic filament with different properties.", "350 - 800"),
	],
	[
		new Item("Motherboard", "The motherboard is where different computer components are connected together. It allows the different components to communicate. It supplies power from the power supply to components attached to itself.", "150 - 350"),
		new Item("Router", "A router controls the different devices on the local network. It also controls traffic between devices on the network and the internet. Routers also have CPUs that do the processing required to manage incoming and outgoing traffic.", "60 - 150"),
		new Item("Modem", "Modems are usually given to you by your ISP. It connects and converts the signals from your ISP to your home to give you internet. Many modern modems also function as a router.", "Included with isp plan"),
		new Item("Power Supply", "Power supplies are not really part of the Control category. Power supplies supply power to the different components in the computer. Computer power supplies convert mains AC to low-voltage regulated DC power. Desktop power supplies are usually rated from 450 to 1000 watts."),
	]
];

const xSpacing = 12;
const zSpacing = 10;
const xStart = -24;
const zStart = -16;

categories.forEach((category, index) => {

  const x = xStart + index * xSpacing;

  const label = document.createElement("a-entity");
  label.setAttribute(
    "text",
    `value: ${category}; align: center; side: double;a`
  );
  label.setAttribute("position", `${x} 1.5 -16`);
  label.setAttribute("scale", "20 20 20");
	document.querySelector("a-scene").appendChild(label);

	const xBox = x - 5;
	items[index].forEach((item, index) => {
		zBox = zStart - index * zSpacing - zSpacing;
		const box = document.createElement("a-box");
		box.setAttribute(
			"width",
			"5"
		);
		box.setAttribute(
			"height",
			"1"
		);
		box.setAttribute(
			"depth",
			"5"
		);
		box.setAttribute(
			"color",
			"#999"
		);
		box.setAttribute(
			"position",
			`${xBox} 0 ${zBox}`
		);
		document.querySelector("a-scene").appendChild(box);

		const xText = xBox + 2;
		const zText = zBox + 5;
		const heading = document.createElement("a-entity");
		heading.setAttribute(
			"text",
			`value: ${item.name}; align: center; side: double; color: #FFF;`
		);
		heading.setAttribute(
			"position",
			`${xText} 2.6 ${zText}`
		);
		heading.setAttribute(
			"scale",
			"12 12 12"
		);
		heading.setAttribute(
			"rotation",
			"0 90 0"
		);
		document.querySelector("a-scene").appendChild(heading);

		const description = document.createElement("a-entity");
		description.setAttribute(
			"text",
			`value: ${item.description}\nTypical cost: ${item.cost}; align: center; baseline: top; side: double; color: #FFF; width: 0.2;`
		);
		description.setAttribute(
			"position",
			`${xText} 2 ${zText}`
		);
		description.setAttribute(
			"scale",
			"20 20 20"
		);
		description.setAttribute(
			"rotation",
			"0 90 0"
		);
		document.querySelector("a-scene").appendChild(description);
	});
});
