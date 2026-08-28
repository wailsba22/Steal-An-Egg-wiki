const BIOMES=[['Forest','Start','Chicken','Starting area; no speed gate.'],['Lake','900','Swan','First speed gate and a forgiving route.'],['Desert','10K','Scorpion','Short route where turns matter.'],['Jungle','40K','Tiger','Tiger closes distance quickly.'],['Snow','170K','Yeti','Tight spaces make dodging harder.'],['Volcano','700K','Hellhound','Fast guardian and heavy egg runs.'],['Abyss Ocean','2.5M','Moby','Small speed losses become obvious.'],['Prehistoric','18M','T-Rex','Long run back if caught.'],['Cosmic','700M','Dragon','The biggest map jump.'],['Cherry Blossom','2.5B','Nine-tailed fox','Home of the Sakura Incubator.']];
const PET_TEXT=`Chicken|Forest|Common|1/s
Dog|Forest|Common|2/s
Bird|Forest|Uncommon|8/s
Owl|Forest|Rare|35/s
Raccoon|Forest|Rare|45/s
Bear|Forest|Epic|240/s
Fox|Forest|Epic|180/s
Brr Brr Patapim|Forest|Legendary|1.8K/s
Frog|Lake|Common|3/s
Duckling|Lake|Common|4/s
Catfish|Lake|Uncommon|12/s
Turtle|Lake|Rare|60/s
Trulimero Trulicina|Lake|Epic|260/s
Swan|Lake|Epic|320/s
Axolotl|Lake|Legendary|2.8K/s
Leviathan|Lake|Cosmic|220K/s
Jerboa|Desert|Common|6/s
Fennec|Desert|Uncommon|18/s
Camel|Desert|Rare|75/s
Tob Tobi Tob Tob|Desert|Epic|325/s
Snake|Desert|Legendary|3.6K/s
Scorpion|Desert|Mythic|18.5K/s
Sand Spider|Desert|Mythic|16K/s
Royal Sphinx|Desert|Cosmic|280K/s
Toucan|Jungle|Rare|110/s
Chimpanzee|Jungle|Rare|90/s
Crocodile|Jungle|Epic|420/s
Gorilla|Jungle|Legendary|4.8K/s
Orangutini Ananassini|Jungle|Legendary|5.5K/s
Spider|Jungle|Mythic|22K/s
Tiger|Jungle|Mythic|28K/s
King Snake|Jungle|Secret|3.5M/s
Penguin|Snow|Rare|140/s
Walrus|Snow|Epic|600/s
Polar Bear|Snow|Legendary|7K/s
Sabertooth Tiger|Snow|Mythic|35K/s
Mammoth|Snow|Mythic|42K/s
King Mammoth|Snow|Cosmic|400K/s
Yeti|Snow|Secret|5M/s
Ice Dragon|Snow|Eternal|65M/s
Lava Gecko|Volcano|Rare|180/s
Lava Frog|Volcano|Epic|850/s
Flaming Bull|Volcano|Legendary|9.5K/s
Lava Iguana|Volcano|Legendary|11K/s
Chillin Chilli|Volcano|Mythic|55K/s
Cerberus|Volcano|Secret|8M/s
Phoenix|Volcano|Eternal|85M/s
Lava Dragon|Volcano|Eternal|100M/s
Parrotfish|Abyss Ocean|Rare|220/s
Swordfish|Abyss Ocean|Epic|1.1K/s
Shark|Abyss Ocean|Legendary|15K/s
Orca|Abyss Ocean|Mythic|80K/s
Whale Shark|Abyss Ocean|Cosmic|700K/s
Beluga Whale|Abyss Ocean|Cosmic|850K/s
Kraken|Abyss Ocean|Secret|15M/s
El Maja|Abyss Ocean|Eternal|130M/s
Dodo|Prehistoric|Rare|280/s
Pterodactyl|Prehistoric|Legendary|22K/s
Ankylosaurus|Prehistoric|Mythic|120K/s
Triceratops|Prehistoric|Cosmic|1.2M/s
Bronto|Prehistoric|Cosmic|1.5M/s
Tralaledon|Prehistoric|Secret|32M/s
T-Rex|Prehistoric|Secret|25M/s
Mosasaurus|Prehistoric|Eternal|180M/s
Centapede|Cosmic|Epic|1.5K/s
Cosmic Gecko|Cosmic|Legendary|30K/s
Cosmic Gorilla|Cosmic|Mythic|180K/s
La Vacca Saturno Saturnita|Cosmic|Cosmic|2.2M/s
Cosmic Dragon|Cosmic|Secret|60M/s
Cosmic Skeleton Boss|Cosmic|Secret|45M/s
Eternal Lunar Dragon|Cosmic|Eternal|250M/s
Unicorn|Cosmic|Divine|1B/s
Crane|Cherry Blossom|Epic|4K/s
Salamander|Cherry Blossom|Legendary|74K/s
Red Panda|Cherry Blossom|Mythic|450K/s
Koi|Cherry Blossom|Cosmic|12M/s
Snowy Owl|Cherry Blossom|Cosmic|7.5M/s
Stag|Cherry Blossom|Secret|145M/s
Oni Tiger|Cherry Blossom|Eternal|600M/s
Kitsune|Cherry Blossom|Divine|1.8B/s
Tung Tung Sahur|Shop (Brainrot Egg)|Rare|39% hatch chance
Bananita Dolphinita|Shop (Brainrot Egg)|Epic|25% hatch chance
Belula Beluga|Shop (Brainrot Egg)|Mythic|20% hatch chance
Mangolini Parrochini|Shop (Brainrot Egg)|Cosmic|10% hatch chance
Bomboclat Crocolat|Shop (Brainrot Egg)|Secret|5% hatch chance
Strawberry Elephant|Shop (Brainrot Egg)|Eternal|1% hatch chance`;
const PETS=PET_TEXT.split('\n').map(row=>{const [name,biome,rarity,income]=row.split('|');return {name,biome,rarity,income};});
const MUTATIONS={Normal:1,Silver:1.25,Bloom:1.5,Golden:2,Rainbow:2.5,'Spirit Bloom':3};
const EGGS=[['Forest Egg',100,30,0.35],['Lake Egg',900,45,0.28],['Desert Egg',10000,60,0.22],['Jungle Egg',40000,75,0.18],['Snow Egg',170000,90,0.14],['Volcano Egg',700000,110,0.1],['Abyss Egg',2500000,130,0.08],['Prehistoric Egg',18000000,150,0.06],['Cosmic Egg',700000000,180,0.035],['Cherry Egg',2500000000,240,0.02]];
const EGG_MODEL=[['Common',1,3],['Uncommon',2,5],['Rare',4,8],['Epic',7,12],['Legendary',10,18],['Mythic',15,25],['Cosmic',20,35],['Secret',28,45],['Eternal',35,60],['Divine',45,80]];
const RARITY_INDEX={Common:0,Uncommon:1,Rare:2,Epic:3,Legendary:4,Mythic:5,Cosmic:6,Secret:7,Eternal:8,Divine:9};
const PET_WEIGHT_MODEL={Common:[0.8,1.2],Uncommon:[1,1.5],Rare:[1.2,2],Epic:[1.5,2.5],Legendary:[2,3.5],Mythic:[2.5,4.5],Cosmic:[3,6],Secret:[4,8],Eternal:[5,10],Divine:[7,14]};
const PET_WEIGHT_FACTOR=0.5;
const eggModelFor=eggIndex=>EGG_MODEL[Math.min(eggIndex,EGG_MODEL.length-1)];
const petWeightRange=rarity=>PET_WEIGHT_MODEL[rarity]||[1,2];
const incomeAtWeight=(baseIncome,weight,baseWeight=1)=>baseIncome*Math.max(0.1,1+((weight/baseWeight)-1)*PET_WEIGHT_FACTOR);