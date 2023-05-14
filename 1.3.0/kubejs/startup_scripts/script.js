// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

let metals = {};
let all_metals = ['iron', 'gold', 'osmium', 'copper', 'tin', 'lead', 'uranium', 'aluminum', 'silver', 'nickel', 'zinc'];
let vanilla_metals = ['iron', 'copper', 'gold'];
let mekanism_metals = ['iron', 'gold', 'osmium', 'copper', 'tin', 'lead', 'uranium'];
let thermal_metals = ['tin', 'lead', 'silver', 'nickel'];
let create_metals = ['iron', 'gold', 'copper', 'zinc', 'osmium', 'silver', 'tin', 'lead', 'aluminum', 'uranium', 'nickel'];
// let immersive_metals = ['aluminum', 'lead', 'silver', 'nickel', 'uranium'];

console.log('[AMMONIUM@KUBEJS]: Starting ore processing calculations...');
all_metals.forEach((metal) => {
	metals[metal] = {};
	
	// ores and ingots
	if(vanilla_metals.includes(metal)){
		metals[metal]['ore'] = `minecraft:raw_${metal}`;
		metals[metal]['ingot'] = `minecraft:${metal}_ingot`;
	} else {
		if(metal == 'aluminum'){
			metals[metal]['ore'] = 'immersiveengineering:ingot_aluminum';
			metals[metal]['ingot'] = 'immersiveengineering:raw_aluminum';
		} else {
		if(mekanism_metals.includes(metal)) {
			metals[metal]['ore'] = `mekanism:raw_${metal}`;
			metals[metal]['ingot'] = `mekanism:ingot_${metal}`;
		} else {
		if(thermal_metals.includes(metal)) {
			metals[metal]['ore'] = `thermal:raw_${metal}`;
			metals[metal]['ingot'] = `thermal:${metal}_ingot`;
		} else {
		if(create_metals.includes(metal)) {
			metals[metal]['ore'] = `create:raw_${metal}`;
			metals[metal]['ingot'] = `create:${metal}_ingot`;
		} else {
			console.log(`[AMMONIUM@KUBEJS][ERROR]: could not find ore/ingots for ${metal}`);
		}}}}
	
	}
	
	// crushed ores
		if(create_metals.includes(metal)) {
			metals[metal]['crushed'] = `create:crushed_${metal}_ore`;
		} else {
			metals[metal]['crushed'] = `kubejs:crushed_${metal}_ore`;
		}
	
	// everything else
	if(mekanism_metals.includes(metal)) {
		metals[metal]['dirty_slurry'] = `mekanism:dirty_${metal}`;
		metals[metal]['clean_slurry'] = `mekanism:clean_${metal}`;
		metals[metal]['shard'] = `mekanism:shard_${metal}`;
		metals[metal]['crystal'] = `mekanism:crystal_${metal}`;
		metals[metal]['dust'] = `mekanism:dust_${metal}`;
		metals[metal]['dirty_dust'] = `mekanism:dirty_dust_${metal}`;
		metals[metal]['clump'] = `mekanism:clump_${metal}`;
	} else {
		metals[metal]['dirty_slurry'] = `kubejs:dirty_${metal}`;
		metals[metal]['clean_slurry'] = `kubejs:clean_${metal}`;
		metals[metal]['shard'] = `kubejs:shard_${metal}`;
		metals[metal]['crystal'] = `kubejs:crystal_${metal}`;
		metals[metal]['dirty_dust'] = `kubejs:dirty_dust_${metal}`;
		metals[metal]['clump'] = `kubejs:clump_${metal}`;
		if(thermal_metals.includes(metal)){
			metals[metal]['dust'] = `thermal:${metal}_dust`;
		} else {
			metals[metal]['dust'] = `kubejs:${metal}_dust`;
		}
	}
	
})

console.log('[AMMONIUM@KUBEJS]:Ore processing calculations finished. Metal name registries:');

for(var metal in metals) {
	console.log(metal);
	for(var stage in metals[metal]) {
		console.log(`${stage} -> ${metals[metal][stage]}`);
	}
}

console.log('[AMMONIUM@KUBEJS]:End of list.');

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('cube1').displayName('基礎機械精華');
	event.create('cube1_packaged').displayName('基礎機械水晶');
	event.create('cube2').displayName('一般機械精華');
	event.create('cube2_packaged').displayName('一般機械水晶');
	event.create('cube3').displayName('改良機械精華');
	event.create('cube3_packaged').displayName('改良機械水晶');
	event.create('cube4').displayName('高級機械精華');
	event.create('cube4_packaged').displayName('高級機械水晶');
	event.create('cube4_inert').displayName('惰性高級機械精華').tooltip('很靠近了，但還有點距離...');
	
	event.create('press_rod_die').displayName('金屬桿衝壓模具');
	event.create('oil_clump').displayName('石油球');
	event.create('fission_pellet').displayName('易裂變燃料球');
	event.create('black_hdpe_sheet').displayName('黑 HDPE 板片');
	
	event.create('blaze_effigy').displayName('烈焰使者雕像').tooltip('右鍵召喚烈焰使者');
	event.create('blizz_effigy').displayName('暴雪使者雕像').tooltip('右鍵召喚暴雪使者');
	event.create('blitz_effigy').displayName('狂風使者雕像').tooltip('右鍵召喚狂風使者');
	event.create('basalz_effigy').displayName('岩石使者雕像').tooltip('右鍵召喚岩石使者');
	event.create('dormant_effigy').displayName('沉睡雕像').tooltip('孕育創造生命的力量，只是尚未覺醒');
	
	event.create('steel_gear').displayName('鋼齒輪');
	event.create('bronze_rod').displayName('青銅桿');
	event.create('diamond_rod').displayName('鑽石桿');
	event.create('diamond_plate').displayName('鑽石板');
	event.create('aluminum_gear').displayName('鋁齒輪');
	
	event.create('black_essence').displayName('黑暗精華');
	event.create('enriched_black_essence').displayName('富集黑暗精華');
	
	event.create('basilic_reagent').displayName('基礎試劑');
	event.create('enriched_basilic_reagent').displayName('富集基礎試劑');
	
	event.create('stable_waste').displayName('穩定用盡的核廢料').tooltip('(已禁用) 安全的儲存或處置方式');
	event.create('incomplete_final_shard').displayName('未完成的最終之星碎片');

	event.create('incomplete_time_augment').displayName('時間不穩定器組件').texture('kubejs:item/basic_package');
	event.create('time_augment').displayName('局部時間不穩定器').tooltip('使機器與時間洪流懷錶相容。最好與諧振整合組件一起使用')

	
	event.create('incomplete_creative_blaze_cake').displayName('未完成的創造模式烈焰蛋糕');
	event.create('incomplete_creative_upgrade').displayName('未完成的創造模式升級');

	event.create('coated_redstone').displayName('塗上黑曜石的紅石');

	// industrial foregoing items
	event.create('incomplete_simple_frame').displayName('未完成的中級機械框架').texture('kubejs:item/basic_package');
	event.create('incomplete_advanced_frame').displayName('未完成的高級機械框架').texture('kubejs:item/basic_package');
	event.create('incomplete_supreme_frame').displayName('未完成的終極機械框架').texture('kubejs:item/basic_package');
	event.create('incomplete_speed_1').displayName('未完成的升級：速度 Tier 1').texture('kubejs:item/basic_package');
	event.create('incomplete_speed_2').displayName('未完成的升級：速度 Tier 2').texture('kubejs:item/basic_package');
	event.create('incomplete_eff_1').displayName('未完成的升級：效率 Tier 1').texture('kubejs:item/basic_package');
	event.create('incomplete_eff_2').displayName('未完成的升級：速度 Tier 2').texture('kubejs:item/basic_package');
	event.create('incomplete_proc_1').displayName('未完成的升級：處理 Tier 1').texture('kubejs:item/basic_package');
	event.create('incomplete_proc_2').displayName('未完成的升級：速度 Tier 2').texture('kubejs:item/basic_package');
	event.create('incomplete_range_2').displayName('未完成的升級：範圍 Tier 2').texture('kubejs:item/basic_package');
	
	console.log('[AMMONIUM@KUBEJS]: Adding ore item registry entries...');

	for(var metal in metals) {
		for(var stage in metals[metal]) {
			
			if(stage != 'dirty_slurry' && stage != 'clean_slurry'){
				
				if(metals[metal][stage].startsWith('kubejs')) {
					
					let item = metals[metal][stage].substring(7);
					let name = '';
					let capitalized = metal[0].toUpperCase() + metal.substring(1);
					if(stage == 'shard') {
						name = `${capitalized} 碎片`;
					} else {
					if(stage == 'crystal') {
						name = `${capitalized} 晶體`;
					} else {
					if(stage == 'dirty_dust') {
						name = `汙濁的 ${capitalized} 粉`;
					} else {
					if(stage == 'clump') {
						name = `${capitalized} 碎塊`;
					} else {
					if(stage == 'dust') {
						name = `${capitalized} 粉`;
					}}}}}
					
					console.log(metals[metal][stage]);
					event.create(item).displayName(name);
				}
			}
		}
	}
	
})

onEvent('mekanism.slurry.registry', event => {
	// Change recipes here
	
	console.log('[AMMONIUM@KUBEJS]: Adding ore slurry registry entries...');
	for(var metal in metals) {
		if(metals[metal]['dirty_slurry'] == `kubejs:dirty_${metal}`) {
			event.create(metals[metal]['dirty_slurry'], 'dirty').color(0xFCB88B).ore(metals[metal]['ore']);
			event.create(metals[metal]['clean_slurry'], 'clean').color(0xFCB88B).ore(metals[metal]['ore']);
		}
	}
})

onEvent('mekanism.infuse_type.registry', event => {
	console.log('[AMMONIUM@KUBEJS]: Adding infuse type registry entries...');
	event.create("mekanism:darkness_essence").color(1900851).texture("kubejs:infuse_types/black_essence.png")
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('item.modification', event => {
    event.modify('projectexpansion:infinite_steak', item => {
        item.setFoodProperties(food => {
            food.hunger(5)
            food.saturation(5)
        })
    })
})
