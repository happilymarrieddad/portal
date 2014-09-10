<div id="display-config-tr-grey" style="display: none; border: 1px whitesmoke solid">
    <div class="row">
        <div class="panel">
            <div class="panel-heading">
                <h2 class="panel-title">Grey Hunters<span class="panel-title pull-right" id="display-points-tr-grey">70</span></h2><br />
                <label>Unit Name</label> - <input id="input-tr-grey-unitname" type="text" placeholder="Unit Name" />
            </div>
            <div class="panel-body">
                <div class="col-md-8 col-md-offset-2">

                    <table class="table table-bordered">

                        <thead>
                        <tr>
                            <th></th>
                            <th>WS</th>
                            <th>BS</th>
                            <th>S</th>
                            <th>T</th>
                            <th>W</th>
                            <th>I</th>
                            <th>A</th>
                            <th>LD</th>
                            <th>Sv</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Grey Hunter</td>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>1</th>
                            <th>4</th>
                            <th>1</th>
                            <th>8</th>
                            <th>3+</th>
                        </tr>
                        <tr class="display-tr-grey-leader" style="display:none">
                            <td>Wolf Guard Pack Leader</td>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>4</th>
                            <th>1</th>
                            <th>4</th>
                            <th>1</th>
                            <th>9</th>
                            <th>3+</th>
                        </tr>
                        </tbody>

                    </table>

                    <h4>UNIT COMPOSITION</h4>
                    <h6><span id="display-num-tr-grey">5</span> Grey Hunters
                    <button id="button-add-tr-grey" class="btn btn-sm btn-success">+</button>
                    <button id="button-minus-tr-grey" class="btn btn-sm btn-danger" style="display: none">-</button></h6>
                    <h6 class="display-tr-grey-leader" style="display: none"><span>1</span> Wolf Guard Pack Leader</h6>

                    <h4>WARGEAR</h4>
                    <h5>Unit:</h5>
                    <ul>
                        <li><h6>Power Armour</h6></li>
                        <li><h6>Boltgun (Grey Hunter Only)</h6></li>
                        <li><h6>Bolt Pistol</h6></li>
                        <li><h6>Chainsword (Wolf Guard Pack Leader only)</h6></li>
                        <li><h6>Frag Grenades</h6></li>
                        <li><h6>Krak Grenades</h6></li>
                        <li id="display-wargear-option1-tr-grey-div" style="display:none"><h6 id="display-wargear-option1-tr-grey"></h6></li>
                        <li id="display-wargear-option2-tr-grey-div" style="display:none"><h6 id="display-wargear-option2-tr-grey"></h6></li>
                        <li id="display-wargear-option3-tr-grey-div" style="display:none"><h6 id="display-wargear-option3-tr-grey"></h6></li>
                        <li id="display-wargear-option4-tr-grey-div" style="display:none"><h6 id="display-wargear-option4-tr-grey"></h6></li>
                        <li id="display-cc-num-tr-grey-div" style="display:none"><h6><span id="display-cc-num-tr-grey" >0</span> CC Weapons</h6></li>
                    </ul><br />
                    <div class="display-tr-grey-leader" style="display:none">
                        <h5>Leader:</h5>
                        <ul>
                            <li id="display-tr-grey-pow"><h6><span>Power Armour</span></h6></li>
                            <li id="display-tr-grey-term" style="display:none"><h6><span>Terminator Armour</span></h6></li>

                            <li><h6><span id="display-tr-leader-left-grey">Bolt Pistol</span></h6></li>
                            <li><h6><span id="display-tr-leader-right-grey">Chainsword</span></h6></li>

                            <li id="display-tr-leader-meltabombs-grey" style="display:none"><h6><span id="">Melta Bombs</span></h6></li>
                        </ul>
                    </div>

                    <h4>OPTIONS</h4>
                    <h5>Unit:</h5>


                    <button id="button-add-tr-ccweapon" class="btn btn-sm btn-success">+</button>
                    <button id="button-minus-tr-ccweapon" class="btn btn-sm btn-danger" style="display: none">-</button>
                    <span> - Close Combat Weapon</span><br /><br />
                    <select id="input-option1-tr-grey">
                        <option value="0">Boltgun/Bolt Pistol</option>
                        <option value="15">Power Weapon</option>
                        <option value="25">Power Fist</option>
                    </select><br />
                    <select id="input-option2-tr-grey">
                        <option value="0">Boltgun/Bolt Pistol</option>
                        <option value="15">Plasma Pistol</option>
                    </select><br />
                    <select id="input-option3-tr-grey">
                        <option value="0">Boltgun/Melee Weapon</option>
                        <option value="5">Flamer</option>
                        <option value="10">Meltagun</option>
                        <option value="15">Plasma Gun</option>
                    </select><br />
                    <select id="input-option4-tr-grey" style="display: none">
                        <option value="0">Boltgun/Melee Weapon</option>
                        <option value="5">Flamer</option>
                        <option value="10">Meltagun</option>
                        <option value="15">Plasma Gun</option>
                    </select><br />
                    <input type="checkbox" id="input-add-standard-tr-grey" value="25" />
                    <label> - Wolf Standard</label><br />


                    <br /><input type="checkbox" id="input-tr-grey-leader" value="10" />
                    <label> - Wolf Guard Pack Leader</label><br />

                    <div class="display-tr-grey-leader" style="display:none">
                        <h5>Leader Options:</h5>

                        <input type="checkbox" id="input-tr-grey-leader-term" value="15" /><label>- Terminator Armour</label><br />
                        <input type="checkbox" id="input-tr-grey-leader-meltabombs" value="5" /><label>- Melta Bombs</label>
                        <div class="display-tr-grey-leader-options-term" style="display: none">
                            <h6>Arm 1:</h6>
                            <div><select id="input-tr-grey-leader-term-arm1">
                                    <option value="0" selected>Storm Bolter</option>
                                    <option value="5">Combi-Flamer</option>
                                    <option value="5">Combi-Plasma</option>
                                    <option value="5">Combi-Melta</option>
                                    <option value="15">Wolf Claw</option>
                                    <option value="25">Thunder Hammer</option>
                                </select></div>

                            <h6>Arm 2:</h6>
                            <div><select id="input-tr-grey-leader-term-arm2">
                                    <option value="0" selected>Power Weapon</option>
                                    <option value="0">Storm Shield</option>
                                    <option value="5">Frost Axe</option>
                                    <option value="5">Frost Sword</option>
                                    <option value="10">Wolf Claw</option>
                                    <option value="10">Power Fist</option>
                                    <option value="15">Chain Fist</option>
                                    <option value="15">Thunder Hammer</option>
                                </select></div>
                        </div>
                        <div class="display-tr-grey-leader-options-pow">
                            <h6>Arm 1:</h6>
                            <div><select id="input-tr-grey-leader-pow-arm1">
                                    <option value="0" selected>Bolt Pistol</option>
                                    <option value="0">Chainsword</option>
                                    <option value="5">Storm Bolter</option>
                                    <option value="10">Combi-Flamer</option>
                                    <option value="10">Combi-Plasma</option>
                                    <option value="10">Combi-Melta</option>
                                    <option value="30">Thunder Hammer</option>
                                    <option value="15">Storm Shield</option>
                                    <option value="15">Power Weapon</option>
                                    <option value="20">Frost Sword</option>
                                    <option value="20">Frost Axe</option>
                                    <option value="20">Wolf Claw</option>
                                    <option value="25">Power Fist</option>
                                </select></div>

                            <h6>Arm 2:</h6>
                            <div><select id="input-tr-grey-leader-pow-arm2">
                                    <option value="0" selected>Chainsword</option>
                                    <option value="0">Bolt Pistol</option>
                                    <option value="5">Storm Bolter</option>
                                    <option value="10">Combi-Flamer</option>
                                    <option value="10">Combi-Plasma</option>
                                    <option value="10">Combi-Melta</option>
                                    <option value="30">Thunder Hammer</option>
                                    <option value="15">Storm Shield</option>
                                    <option value="15">Power Weapon</option>
                                    <option value="20">Frost Sword</option>
                                    <option value="20">Frost Axe</option>
                                    <option value="20">Wolf Claw</option>
                                    <option value="30">Two Wolf Claws</option>
                                    <option value="25">Power Fist</option>
                                </select></div>
                        </div>

                    </div>

                    <div id="display-tr-grey-transportation">
                        <h5>Transportation</h5>
                        <div><select id="input-tr-grey-transportation">
                                <option value="0" selected>No Transport</option>
                                <option value="35">Rhino</option>
                                <option value="55">Razorback</option>
                                <option value="35">Drop Pod</option>
                                <option value="215">Stormwolf</option>
                            </select></div>
                        <h6>Options</h6>
                        <div id="input-tr-grey-transportation-rhino" style="display: none">
                            <input type="checkbox" value="5" id="input-tr-grey-rhino-select2" />
                            <span> - Dozer Blade</span><br />
                            <input type="checkbox" value="5" id="input-tr-grey-rhino-select3" />
                            <span> - Storm Bolter</span><br />
                            <input type="checkbox" value="10" id="input-tr-grey-rhino-select4" />
                            <span> - Hunter-Killer Missile</span><br />
                            <input type="checkbox" value="10" id="input-tr-grey-rhino-select5" />
                            <span> - Extra Armour</span><br />
                        </div>
                        <div id="input-tr-grey-transportation-razorback" style="display: none">
                            <select id="input-tr-grey-razorback-select1">
                                <option value="0" selected>Twin-Linked Heavy Bolters</option>
                                <option value="0">Twin-Linked Heavy Flamer</option>
                                <option value="20">Twin-Linked Assault Cannon</option>
                                <option value="20">Twin-Linked Lascannon</option>
                            </select><br />
                            <input type="checkbox" value="20" id="input-tr-grey-razorback-select2" />
                            <span> - Lascannon and Twin-Linked Plasma Gun</span><br />
                            <input type="checkbox" value="5" id="input-tr-grey-razorback-select3" />
                            <span> - Dozer Blade</span><br />
                            <input type="checkbox" value="5" id="input-tr-grey-razorback-select4" />
                            <span> - Storm Bolter</span><br />
                            <input type="checkbox" value="10" id="input-tr-grey-razorback-select5" />
                            <span> - Hunter-Killer Missile</span><br />
                            <input type="checkbox" value="10" id="input-tr-grey-razorback-select6" />
                            <span> - Extra Armour</span><br />
                        </div>
                        <div id="input-tr-grey-transportation-droppod" style="display: none">
                            <select id="input-tr-grey-droppod-select1">
                                <option value="0" selected>Storm Bolter</option>
                                <option value="15">Deathwind Launcher</option>
                            </select><br />
                            <input type="checkbox" value="10" id="input-tr-grey-droppod-select2" />
                            <span> - Locator Beacon</span>
                        </div>
                        <div id="input-tr-grey-transportation-stormwolf" style="display: none">
                            <select id="input-tr-grey-stormwolf-select">
                                <option value="0" selected>Twin-Linked Heavy Bolters</option>
                                <option value="0">Skyhammer Missile Launcher</option>
                                <option value="20">Two Twin-Linked Multi Meltas</option>
                            </select>
                        </div>
                    </div>


                    <br /><br /><button class="pull-right btn btn-info" id="button-add-unit-tr-grey">Add</button>

                </div>
            </div>
        </div>
    </div>
</div>