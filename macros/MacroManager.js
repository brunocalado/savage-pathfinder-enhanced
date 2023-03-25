/*================================
You can use a Macro Manager to call macros from compendiums!
================================*/
const macroList = "Active Effect Builder;Masterwork Forge for Savage Pathfinder;Scroll Craft for Savage Pathfinder;Wealth Analysis for Savage Pathfinder;Coin Manager for Savage Pathfinder;Enchantments for Savage Pathfinder;Add Actions to Actors;";
const compendiumList = "Macros - SWPF - Enhanced";

// --------------------
const mm = game.modules.get('macro-manager')?.api.mm;

const data = {
  "macroList": macroList,
  "title": "GM - SWPF - Enhanced",
  "persistent": false,
  "compendiumList" : compendiumList
}

mm.openCompendiumMacroManager( data );