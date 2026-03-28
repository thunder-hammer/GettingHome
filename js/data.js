/* ==============================
   Data — Encounters, Intro, Endings
   ============================== */

const INTRO_TEXT = `The bar closed early tonight. Something about a burst pipe in the back. Your phone reads 11:47 PM \u2014 eight percent battery \u2014 and the rideshare app keeps spinning. No drivers available.

The last bus left twenty minutes ago. You checked twice.

Your apartment is twelve blocks north. Twelve blocks through downtown at midnight. During the day it\u2019s nothing \u2014 coffee shops and crosswalks. But the city changes after dark. Quieter. The kind of quiet that makes you notice things.

You pull your jacket tighter and start walking.`;

const TOTAL_BLOCKS = 12;

const EncounterData = [
  {
    id: 'dark-alley',
    title: 'The Shortcut',
    text: `A narrow alley cuts between two apartment buildings, promising a shortcut to the next block. The only light is a single bulb above a service door halfway down. Beyond that, darkness. You can hear the hum of an air conditioning unit, but nothing else.`,
    choices: [
      {
        text: 'Cut through the alley quickly',
        statCheck: { stat: 'courage', difficulty: 8 },
        success: {
          text: `You walk fast, eyes forward, footsteps deliberate. A cat bolts from behind a dumpster and your heart stutters, but you don\u2019t break stride. You emerge on the other side in seconds. That saved some energy.`,
          statChanges: { stamina: 1 }
        },
        failure: {
          text: `Halfway through, something clatters behind you \u2014 a bottle rolling off a ledge. You don\u2019t look back. You run, stumbling over a garbage bag, and burst onto the next street breathing hard.`,
          statChanges: { stamina: -1, courage: -1 }
        }
      },
      {
        text: 'Go around the block instead',
        success: {
          text: `You take the long way, sticking to the lit sidewalk. It\u2019s a few extra minutes on your feet, but the streetlights are a comfort. Sometimes the smart choice and the brave choice aren\u2019t the same thing.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Scan the alley with your phone light first',
        statCheck: { stat: 'streetSmarts', difficulty: 8 },
        success: {
          text: `You aim your phone\u2019s flashlight down the alley, checking for movement. Nothing but damp concrete and fire escapes. You walk through with confidence, saving time and energy.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `Your phone light catches a shape near the dumpster \u2014 just a pile of cardboard, but it looks too much like a person in the shadows. You back away and take the long way around.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Sprint through the pitch-dark end at full speed',
        statCheck: { stat: 'courage', difficulty: 12 },
        success: {
          text: `You kill your phone light and run blind into the darkness. Your feet slap wet concrete, your shoulder clips a wall — but you burst through to the other side in seconds, blood singing. You feel invincible.`,
          statChanges: { courage: 2, stamina: 2 }
        },
        failure: {
          text: `Halfway through the dark you trip hard on something — a pipe, a pallet — and go down on your hands and knees. Pain shoots through your wrist. You crawl up and limp the rest of the way out, palms bleeding, shaking all over.`,
          statChanges: { stamina: -3, courage: -2 }
        }
      }
    ]
  },
  {
    id: 'panhandler',
    title: 'Unwanted Attention',
    text: `A man steps out from a doorway as you pass, closer than comfortable. He\u2019s jittery, shifting his weight from foot to foot, and his voice is too loud for the hour. \u201CHey \u2014 you got any cash? Just a couple bucks. Come on.\u201D He moves to block your path.`,
    choices: [
      {
        text: 'Talk your way past him calmly',
        statCheck: { stat: 'streetSmarts', difficulty: 9 },
        success: {
          text: `\u201CSorry, I\u2019ve got nothing on me tonight.\u201D You say it steady, with just enough eye contact. He reads your tone \u2014 no aggression, no fear \u2014 and steps aside. \u201CAlright, alright. Stay safe.\u201D You keep walking.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You try to brush him off but your voice comes out tight and clipped. He steps closer, more agitated. \u201CCome on, just a dollar\u2014\u201D You duck past him and walk fast, not quite running. Your hands are shaking.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Stand your ground firmly',
        statCheck: { stat: 'courage', difficulty: 10 },
        success: {
          text: `You stop walking and look him square in the eye. \u201CBack up.\u201D Two words, hard and clear. Something in your tone catches him off guard. He raises his hands and shuffles back. \u201CAlright, alright, no trouble.\u201D He melts back into the doorway.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `You try to stand firm but your voice wavers. He gets louder, sensing hesitation. You break eye contact first and hurry past, heart hammering. You\u2019re fine, but the encounter lingers like a bad taste.`,
          statChanges: { courage: -1, stamina: -1 }
        }
      },
      {
        text: 'Cross the street and keep moving',
        success: {
          text: `You cut across the street without a word, putting two lanes of empty asphalt between you. He shouts something after you, but you don\u2019t catch it. You don\u2019t look back. Keep moving.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Shove past him and run',
        statCheck: { stat: 'courage', difficulty: 12 },
        success: {
          text: `You drop your shoulder and push through hard. He stumbles back, startled — didn\u2019t expect that. You\u2019re already running. Behind you, silence. He didn\u2019t follow. Your heart is a jackhammer but your legs feel strong. Nobody\u2019s stopping you tonight.`,
          statChanges: { courage: 2, stamina: 1 }
        },
        failure: {
          text: `You try to shove past but he grabs your arm. You wrench free, stumbling, and run — but he got your sleeve and something ripped. You don\u2019t stop running for three blocks. When you finally do, you\u2019re gasping, trembling, and something in your shoulder doesn\u2019t feel right.`,
          statChanges: { courage: -2, stamina: -3 }
        }
      }
    ]
  },
  {
    id: 'stray-dogs',
    title: 'The Pack',
    text: `Three dogs are sprawled across the sidewalk ahead \u2014 no collars, no owner. The biggest one, a lean mutt with a torn ear, lifts its head to watch you approach. Its eyes catch the streetlight. The other two stand up, tails low and uncertain.`,
    choices: [
      {
        text: 'Walk past calmly and confidently',
        statCheck: { stat: 'courage', difficulty: 8 },
        success: {
          text: `You keep your pace steady, shoulders relaxed, not making eye contact. The big one watches you pass but doesn\u2019t move. The other two sniff the air and lose interest. You\u2019re through.`,
          statChanges: {}
        },
        failure: {
          text: `You try to walk past but tense up as the big one stands. It lets out a low growl and you freeze, then back away slowly. You end up circling the block, legs burning from the extra distance.`,
          statChanges: { stamina: -2 }
        }
      },
      {
        text: 'Try speaking softly to calm them',
        statCheck: { stat: 'streetSmarts', difficulty: 9 },
        success: {
          text: `\u201CHey there. Easy.\u201D You keep your voice low and even, letting them smell the air around you. The big one\u2019s tail gives a tentative wag. You ease past, and the smallest one actually follows you for half a block before trotting back.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `Your soothing words have the opposite effect \u2014 the middle dog starts barking, which sets off the others. You back away with your hands up and take the long way around, ears ringing.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Circle around through the street',
        success: {
          text: `You step off the curb and give them a wide berth, walking in the empty street. The big one tracks you with its eyes but doesn\u2019t get up. A detour, but a safe one.`,
          statChanges: { stamina: -1 }
        }
      }
    ]
  },
  {
    id: 'broken-streetlight',
    title: 'Blackout Block',
    text: `The next block is dark. Not dim \u2014 dark. Every streetlight on the stretch is out, leaving just the faint glow from curtained windows three stories up. You can make out the sidewalk, barely. Somewhere ahead, a sign creaks in the wind.`,
    choices: [
      {
        text: 'Push through carefully, watching your step',
        statCheck: { stat: 'streetSmarts', difficulty: 8 },
        success: {
          text: `You slow down and let your eyes adjust. Cracks in the pavement, a fire hydrant, a newspaper box \u2014 you navigate around each one. Your night vision is better than you thought. One block of dark, no problem.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `Your foot finds a crack in the pavement and you stumble hard, catching yourself on a parking meter. Your palm stings and your ankle throbs. You limp to the lit block ahead, rattled.`,
          statChanges: { stamina: -2 }
        }
      },
      {
        text: 'Use your phone flashlight to guide you',
        statCheck: { stat: 'streetSmarts', difficulty: 7 },
        success: {
          text: `The phone light cuts a narrow beam through the dark. You walk quickly, sweeping the light ahead. A few windows twitch their curtains as you pass \u2014 just curious neighbors. You reach the next lit block without trouble.`,
          statChanges: {}
        },
        failure: {
          text: `Your phone light makes you visible from blocks away \u2014 a spotlight in the dark. You feel exposed and hurry through, nearly tripping twice. You make it, but your nerves are shot.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Wait for someone else to walk by and follow',
        success: {
          text: `You linger at the edge of the dark block. After a minute, a couple walks past, laughing about something. You fall into step behind them, close enough for their phone light to guide you, far enough to not be noticed. Clever.`,
          statChanges: { stamina: -1 }
        }
      }
    ]
  },
  {
    id: 'stranger-ride',
    title: 'The Offer',
    text: `A sedan slows to a crawl beside you, window rolling down. The driver, a middle-aged man in a work jacket, leans over. \u201CYou shouldn\u2019t be walking alone this late. I can drop you somewhere \u2014 where are you headed?\u201D The engine idles. The offer hangs in the air.`,
    choices: [
      {
        text: 'Decline politely and keep walking',
        success: {
          text: `\u201CThanks, I\u2019m good. Almost home.\u201D You keep walking, tone friendly but final. He nods and drives off. The car disappears around the next corner. You were probably fine either way, but this felt right.`,
          statChanges: {}
        }
      },
      {
        text: 'Accept the ride \u2014 read the situation first',
        statCheck: { stat: 'streetSmarts', difficulty: 10 },
        decision: 'accepted-ride',
        success: {
          text: `Something about him reads genuine \u2014 the work jacket, the dad energy, the concerned frown. You get in. He talks about his daughter, about how he\u2019d want someone to help her. Three blocks later, he drops you off with a wave. Faith in strangers, slightly restored.`,
          statChanges: { stamina: 3 }
        },
        failure: {
          text: `You get in, but the moment the door closes, your gut clenches. Nothing happens \u2014 he drives, makes small talk, drops you off two blocks later. But your hands were balled into fists the whole time. Never again.`,
          statChanges: { stamina: 1, courage: -1 }
        }
      },
      {
        text: 'Say no firmly and note his plate number',
        success: {
          text: `\u201CNo thanks.\u201D You step back and make a point of looking at his license plate. He notices, gives an awkward nod, and drives off. You repeat the plate number under your breath a few times. Smart habit.`,
          statChanges: { streetSmarts: 1 }
        }
      },
      {
        text: 'Get in — but keep one hand on the door handle',
        statCheck: { stat: 'streetSmarts', difficulty: 13 },
        decision: 'risky-ride',
        success: {
          text: `You memorize the plate, text it to yourself, and climb in with your hand on the handle. You watch every turn like a hawk. He drives you five blocks — five — and drops you with a tired smile. You saved your legs and kept your wits. Calculated risk, perfect execution.`,
          statChanges: { stamina: 4, streetSmarts: 2 }
        },
        failure: {
          text: `You get in. He takes a turn you don\u2019t recognize. Your stomach drops. "Shortcut," he says, but the street is completely dark. You yank the handle and bail at a red light, hitting the pavement hard. Your knee screams. You limp away fast, not looking back, not breathing right.`,
          statChanges: { stamina: -3, courage: -2, streetSmarts: -1 }
        }
      }
    ]
  },
  {
    id: 'construction-zone',
    title: 'Roadwork',
    text: `Orange barricades and chain-link fencing block the sidewalk ahead. A construction project has torn up half the street \u2014 dirt mounds, idle excavators, temporary traffic signs pointing nowhere useful. There\u2019s a narrow gap in the fence, or you could detour around the whole mess.`,
    choices: [
      {
        text: 'Squeeze through the gap in the fence',
        statCheck: { stat: 'courage', difficulty: 8 },
        success: {
          text: `You slip through the gap sideways, jacket scraping the chain-link. Inside, the construction zone is actually easy to navigate \u2014 plywood walkways and orange cones marking a path. You\u2019re through in two minutes.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `You try to squeeze through but your jacket catches on a loose wire. You yank it free, tearing the fabric, and scramble through the dark construction zone. A security light clicks on as you exit the other side. Too close.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Look for a path around the equipment',
        statCheck: { stat: 'streetSmarts', difficulty: 9 },
        success: {
          text: `You study the layout and spot where the workers left a gap between the excavator and the fence. A quick hop over a traffic cone and you\u2019re on the clear sidewalk on the other side. Nice route-finding.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You try to thread between the equipment but hit a dead end \u2014 a wall of jersey barriers. You have to backtrack and take the long detour after all. Double the walking for nothing.`,
          statChanges: { stamina: -2 }
        }
      },
      {
        text: 'Take the two-block detour around',
        success: {
          text: `You follow the sidewalk east, around the construction zone and back. It\u2019s longer than you\u2019d like and your feet are starting to feel every step. But at least you\u2019re on solid, well-lit ground.`,
          statChanges: { stamina: -2 }
        }
      },
      {
        text: 'Climb over the excavator and drop down the other side',
        statCheck: { stat: 'courage', difficulty: 12 },
        success: {
          text: `You grab the tread of the excavator and haul yourself up, swinging over the cab and dropping into soft dirt on the other side. Your hands are greasy and your heart is pounding, but you just cut through in thirty seconds. Reckless and brilliant.`,
          statChanges: { courage: 2, stamina: 2 }
        },
        failure: {
          text: `You make it onto the excavator but your foot slips on the greasy cab. You slide down the far side wrong, landing hard on a pile of rebar. Something cuts through your jeans. You hobble away bleeding, cursing yourself for being this stupid.`,
          statChanges: { stamina: -4, courage: -1 }
        }
      }
    ]
  },
  {
    id: 'rowdy-bar',
    title: 'Last Call',
    text: `A dive bar up ahead is emptying its last customers onto the sidewalk. A group of five or six people linger in a cloud of cigarette smoke and loud laughter. One of them spots you approaching. Someone wolf-whistles. Another laughs.`,
    choices: [
      {
        text: 'Walk past like you own the sidewalk',
        statCheck: { stat: 'courage', difficulty: 9 },
        success: {
          text: `You don\u2019t slow down, don\u2019t speed up, don\u2019t look over. Your stride says everything: not interested, not afraid. The whistle dies on the air. No one follows up. You pass through like they\u2019re furniture.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `You try to project confidence but someone calls out \u2014 \u201CWhere you going, sweetheart?\u201D \u2014 and your mask slips. You walk faster, face burning, and don\u2019t breathe normally until you\u2019re a block away.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Cross the street to avoid them',
        success: {
          text: `You cross the street before they get a good look. Someone says something you can\u2019t make out. You don\u2019t need to. The other sidewalk is empty and quiet, and that\u2019s enough.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Blend in \u2014 walk like you\u2019re heading to the bar',
        statCheck: { stat: 'streetSmarts', difficulty: 9 },
        success: {
          text: `You pull out your phone and look at it like you\u2019re checking a text, matching their casual energy. You walk right through the group with a distracted half-nod. They barely register you. Camouflage.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `Your attempt at casual doesn\u2019t quite land. \u201CHey, you coming in? Bar\u2019s closed!\u201D Laughter. You smile awkwardly and keep walking, picking up the pace once you\u2019re past. Close enough.`,
          statChanges: {}
        }
      },
      {
        text: 'Walk straight through and tell them to back off',
        statCheck: { stat: 'courage', difficulty: 13 },
        success: {
          text: `You walk right into the middle of the group. Someone opens their mouth and you cut them off — "Don\u2019t." One word, ice-cold. The laughter dies. They part like water. You walk through without breaking stride, adrenaline turning every nerve to steel.`,
          statChanges: { courage: 3 }
        },
        failure: {
          text: `You try to walk through tough but the biggest one steps in front of you. "What did you say?" The group circles. Someone pushes you from behind. You stumble, catch yourself, and bolt. They don\u2019t chase — just laugh — but you run for two blocks anyway, legs burning, pride shattered.`,
          statChanges: { courage: -2, stamina: -3 }
        }
      }
    ]
  },
  {
    id: 'lost-tourist',
    title: 'Lost',
    text: `A woman with a rolling suitcase is standing under a bus stop sign, turning her phone in every direction like it might work better at a different angle. She spots you and her face floods with relief. \u201CExcuse me? I\u2019m trying to find the Meridian Hotel \u2014 my map app keeps crashing. Do you know it?\u201D`,
    choices: [
      {
        text: 'Stop and help with directions',
        statCheck: { stat: 'streetSmarts', difficulty: 7 },
        decision: 'helped-tourist',
        success: {
          text: `You know exactly where it is \u2014 four blocks east, past the parking garage. You walk her through it turn by turn. She thanks you three times and squeezes your arm. \u201CYou\u2019re a lifesaver.\u201D The gratitude warms something in your chest.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You\u2019re not totally sure, but you give her your best guess \u2014 east on Fourth, maybe? She seems grateful anyway. \u201CThank you so much.\u201D You hope you got it right.`,
          statChanges: {}
        }
      },
      {
        text: 'Walk her part of the way \u2014 it\u2019s on your route',
        decision: 'helped-tourist',
        success: {
          text: `\u201CI\u2019m headed that direction \u2014 I\u2019ll walk you.\u201D She almost cries with relief. You walk two blocks together, chatting about her trip, her terrible airline, her daughter\u2019s wedding. By the time you point her toward the hotel, the night feels a little less lonely.`,
          statChanges: { stamina: -1, courage: 1, streetSmarts: 1 }
        }
      },
      {
        text: 'Point her in the right direction and keep moving',
        success: {
          text: `\u201CThat way, about four blocks.\u201D You gesture east and keep walking. Quick and helpful enough. She calls a thank you after you. You wave without turning around.`,
          statChanges: {}
        }
      }
    ]
  },
  {
    id: 'police-checkpoint',
    title: 'Red and Blue',
    text: `Red and blue lights flash at the intersection ahead. Two patrol cars are angled across the road, officers checking IDs and asking questions. A small cluster of pedestrians waits at the corner. It\u2019s probably routine \u2014 but something about flashing lights at midnight makes your stomach clench regardless.`,
    choices: [
      {
        text: 'Wait in line and cooperate',
        statCheck: { stat: 'streetSmarts', difficulty: 7 },
        success: {
          text: `You wait your turn, ID ready. The officer glances at it, asks where you\u2019re coming from, where you\u2019re going. You answer calmly. \u201CStay safe out there.\u201D He waves you through. Two minutes, no drama.`,
          statChanges: {}
        },
        failure: {
          text: `The officer asks a couple of questions and you answer too quickly, tripping over your words. He looks at you a beat longer than comfortable before waving you through. Nothing happened, but your heart is pounding anyway.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Walk up confidently \u2014 nothing to hide',
        statCheck: { stat: 'courage', difficulty: 9 },
        success: {
          text: `You approach with an easy stride, ID already in hand. The officer barely looks at it. \u201CHave a good night.\u201D You\u2019re through the checkpoint before the people in line have moved. Confidence is its own ID.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `Your confident approach reads as something else. \u201CStep over here, please.\u201D Extra questions, a longer look at your ID. They let you go after five minutes, but the delay and the scrutiny leave you drained.`,
          statChanges: { stamina: -1, courage: -1 }
        }
      },
      {
        text: 'Find another route around the checkpoint',
        success: {
          text: `You cut down a side street before reaching the intersection. It adds a couple of blocks, but you avoid the whole production. Sometimes the fastest route is the one without flashing lights.`,
          statChanges: { stamina: -1 }
        }
      }
    ]
  },
  {
    id: 'convenience-store',
    title: 'Open 24 Hours',
    text: `The fluorescent glow of a convenience store washes over the sidewalk like a beacon. Through the window you can see the clerk scrolling on his phone behind the counter. A coffee machine steams in the corner. The OPEN sign hums. Your legs ache.`,
    choices: [
      {
        text: 'Go in and rest for a few minutes',
        success: {
          text: `The warmth hits you as you push through the door. You pretend to browse the snack aisle while your legs stop throbbing. The clerk nods at you. You nod back. Five minutes of warmth and fluorescent normalcy. It helps more than you\u2019d expect.`,
          statChanges: { stamina: 3 }
        }
      },
      {
        text: 'Buy a hot coffee',
        success: {
          text: `You grab a coffee \u2014 burnt and perfect. The clerk rings you up and says, \u201CCareful on Sixth Street, some guys were being loud out there earlier.\u201D You thank him. The coffee warms your hands and the tip warms your route planning.`,
          statChanges: { stamina: 2, streetSmarts: 1 }
        }
      },
      {
        text: 'Keep walking \u2014 don\u2019t lose momentum',
        success: {
          text: `You glance at the warm light and keep going. Stopping feels like giving up right now. You need to keep your legs moving or they\u2019ll stiffen up. Home is getting closer with every step.`,
          statChanges: {}
        }
      }
    ]
  },
  {
    id: 'street-musician',
    title: 'Night Music',
    text: `Someone is playing guitar on the corner \u2014 a woman sitting on a milk crate, case open at her feet. She\u2019s playing something slow and bluesy, fingers moving like they\u2019ve played this song a thousand times. The music drifts through the empty street, making the night feel briefly, impossibly gentle.`,
    choices: [
      {
        text: 'Stop and listen for a moment',
        success: {
          text: `You lean against a lamppost and close your eyes. The music wraps around you \u2014 something about heartbreak and highways. When the song ends, she looks up and smiles. You smile back and walk on. Your legs feel lighter.`,
          statChanges: { stamina: 1 }
        }
      },
      {
        text: 'Drop a dollar in her case and exchange a nod',
        decision: 'tipped-musician',
        success: {
          text: `You fold a bill into her case. She tips an invisible hat without missing a note. The tiny exchange \u2014 a kindness given, a kindness acknowledged \u2014 reminds you that the city isn\u2019t just threats and shadows. People live here. Good people.`,
          statChanges: { courage: 1 }
        }
      },
      {
        text: 'Keep walking, enjoy the music from a distance',
        success: {
          text: `You don\u2019t stop, but you slow down. The blues follow you for half a block, getting softer, and then it\u2019s just the city again. Still, for a moment, the night had a soundtrack.`,
          statChanges: {}
        }
      }
    ]
  },
  {
    id: 'suspicious-van',
    title: 'Engine Running',
    text: `A white van is parked halfway down the next block, engine idling, no lights on. The side door is slightly open. You can\u2019t see anyone inside from this angle, but a radio plays softly through the gap. Every self-defense article you\u2019ve ever read flashes through your mind at once.`,
    choices: [
      {
        text: 'Cross to the other side of the street',
        success: {
          text: `You cross without hesitation, putting the full width of the street between you and the van. As you pass, a delivery driver climbs out the back with a stack of boxes, heading for the building\u2019s service entrance. Just a late-night delivery. But you don\u2019t regret crossing.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Walk past quickly on the far edge of the sidewalk',
        statCheck: { stat: 'courage', difficulty: 9 },
        success: {
          text: `You hug the building side of the sidewalk, giving the van maximum distance while maintaining your pace. A guy in a uniform steps out to grab a dolly. Delivery driver. Your pulse returns to normal.`,
          statChanges: {}
        },
        failure: {
          text: `You\u2019re passing the van when the side door slides open with a bang. You nearly jump out of your skin \u2014 it\u2019s just someone grabbing equipment. But the adrenaline surge leaves you shaky for the next block.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Snap a photo of the plate and keep moving',
        statCheck: { stat: 'streetSmarts', difficulty: 8 },
        success: {
          text: `You casually raise your phone and grab a photo of the plate as you pass \u2014 quick and subtle. Nothing happens, but if something did, you\u2019d have evidence. Smart habit for midnight walks.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You try to get a photo but your camera takes too long to focus in the dark. The flash goes off. You shove your phone away and walk fast, feeling like you just announced yourself to the whole block.`,
          statChanges: { stamina: -1, courage: -1 }
        }
      },
      {
        text: 'Walk right up and look inside',
        statCheck: { stat: 'courage', difficulty: 13 },
        success: {
          text: `You walk straight to the van and look in through the cracked door. Boxes. Dolly. Manifest clipboard. Just a delivery van. The driver comes around the corner with coffee and jumps when he sees you. "Jesus — you scared me." You almost laugh. Fear feeds on distance; up close, it was nothing.`,
          statChanges: { courage: 3, streetSmarts: 1 }
        },
        failure: {
          text: `You walk up to the van and peer inside. The door suddenly slides open wide — a figure in the dark, right there. You scream and run. Behind you, someone shouts "Hey! HEY!" You don\u2019t stop. You don\u2019t look back. Three blocks of blind sprinting before your legs finally buckle.`,
          statChanges: { stamina: -4, courage: -2 }
        }
      }
    ]
  },
  {
    id: 'sudden-rain',
    title: 'Downpour',
    text: `The first drop hits your forehead. Then three more, then twenty, then the sky opens up completely. Rain hammers the sidewalk, turning it into a river of reflected light. In seconds, you\u2019re soaked. An awning juts out over a closed boutique to your left, and you can see the glow of a laundromat a half-block ahead.`,
    choices: [
      {
        text: 'Push through the rain',
        success: {
          text: `You put your head down and walk. The rain soaks through your jacket in seconds, cold water running down your back. But you keep moving. By the time the rain eases, you\u2019ve covered two blocks and you\u2019re shivering but closer to home.`,
          statChanges: { stamina: -2, courage: 1 }
        }
      },
      {
        text: 'Shelter under the awning and wait',
        success: {
          text: `You duck under the awning, hugging yourself against the cold. The rain hammers the fabric above you. After five minutes it eases to a drizzle. You\u2019re cold and your shoes are soaked, but at least you\u2019re not drenched.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Run for the laundromat',
        statCheck: { stat: 'streetSmarts', difficulty: 8 },
        success: {
          text: `You sprint for the laundromat and burst through the door, dripping everywhere. The warmth from the dryers is heavenly. You stand in front of one for a few minutes, steam rising from your jacket. The rain passes. You head back out nearly dry.`,
          statChanges: { stamina: 1 }
        },
        failure: {
          text: `You bolt for the laundromat but your foot hits a slick patch and slides. You don\u2019t fall, but you wrench your ankle catching yourself. You limp the rest of the way inside, more wet than when you started.`,
          statChanges: { stamina: -2 }
        }
      }
    ]
  },
  {
    id: 'homeless-person',
    title: 'The Bench',
    text: `An older woman is sitting on a bus bench, a thin blanket around her shoulders, a paper bag at her feet. She\u2019s not asking for anything \u2014 just sitting, watching the empty street with tired eyes. She catches your gaze and gives a small, dignified nod.`,
    choices: [
      {
        text: 'Nod back and keep walking',
        success: {
          text: `You return her nod \u2014 a small acknowledgment between two women out in the cold. She watches you pass without a word. The exchange is brief and honest and somehow enough.`,
          statChanges: {}
        }
      },
      {
        text: 'Stop and ask if she\u2019s alright',
        statCheck: { stat: 'courage', difficulty: 7 },
        decision: 'checked-on-stranger',
        success: {
          text: `\u201CYou okay out here?\u201D She looks at you, really looks, and smiles. \u201CI\u2019m alright, honey. Waiting on morning. You be careful.\u201D The brief conversation grounds you. Reminds you that being vulnerable isn\u2019t the same as being alone.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `You start to ask but the words come out mumbled. She waves you on gently. \u201CYou get home safe, now.\u201D You nod and keep walking, wishing you\u2019d said it better.`,
          statChanges: {}
        }
      },
      {
        text: 'Sit with her for a moment',
        decision: 'sat-with-stranger',
        success: {
          text: `You sit down on the bench beside her. Neither of you says much. She tells you the 14 bus will be running again at 5 AM. You tell her you\u2019re walking home. \u201CTake Oak Street,\u201D she says. \u201CQuieter.\u201D You thank her and mean it.`,
          statChanges: { stamina: 1, streetSmarts: 1 }
        }
      }
    ]
  },
  {
    id: 'cat-in-fence',
    title: 'Small Cry',
    text: `A thin mewing sound comes from somewhere low and to your right. A small tabby cat is wedged between the iron bars of a fence, front half through, back half stuck. It looks at you with enormous eyes and lets out another desperate, tiny cry.`,
    choices: [
      {
        text: 'Gently help it through',
        statCheck: { stat: 'courage', difficulty: 7 },
        decision: 'helped-cat',
        success: {
          text: `You crouch down and ease the cat\u2019s hips through the gap, murmuring reassurances. It pops free and lands on its feet, looking insulted. Then it rubs against your ankle once, purrs, and vanishes into a hedge. Worth it.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `You try to ease it through but it panics and claws your hand \u2014 a bright line of pain across your knuckles. But you get it free. It bolts without a backward glance. You flex your stinging hand and walk on.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Figure out where the bars are widest',
        statCheck: { stat: 'streetSmarts', difficulty: 8 },
        decision: 'helped-cat',
        success: {
          text: `You look at the fence and notice the bars are slightly wider near the ground. You gently guide the cat downward, and it slips through with a surprised chirp. It headbutts your shoe and trots away. Problem-solving at midnight.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You try to find a wider gap but the cat\u2019s getting more distressed. You end up just carefully pulling it free by hand \u2014 it scratches you for your trouble, but at least it\u2019s unstuck.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Keep walking \u2014 it will figure it out',
        success: {
          text: `You glance at the cat and walk on. It mews after you, but cats are resourceful. It\u2019ll be fine. Probably. You try not to think about it for the next block. You mostly succeed.`,
          statChanges: {}
        }
      }
    ]
  },
  {
    id: 'flickering-neon',
    title: 'The Back Way',
    text: `A neon sign \u2014 PALM READER in flickering pink \u2014 illuminates a narrow passage between a shuttered laundromat and a boarded-up storefront. Through the passage, you can see it opens onto the next street over. Graffiti covers the walls in layers. A security camera watches the entrance, its red light steady.`,
    choices: [
      {
        text: 'Take the passage \u2014 it\u2019s well-monitored',
        statCheck: { stat: 'courage', difficulty: 9 },
        success: {
          text: `The camera gives you confidence. You walk through the passage, neon painting your shadow pink on the graffiti walls. It\u2019s narrow but clear, and you\u2019re on the next street in thirty seconds. Not bad.`,
          statChanges: { stamina: 1 }
        },
        failure: {
          text: `You start through the passage but the neon flickers out, plunging you into darkness. Your nerve breaks and you retreat to the main street, heart racing. The neon buzzes back on behind you, as if mocking.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Stay on the main sidewalk',
        success: {
          text: `You walk past the passage without slowing. The neon sign buzzes and flickers in your peripheral vision. The main street is longer but known. You\u2019ll take known over short, tonight.`,
          statChanges: {}
        }
      },
      {
        text: 'Check if the security camera is real',
        statCheck: { stat: 'streetSmarts', difficulty: 9 },
        success: {
          text: `You look closer \u2014 the camera has a wire running into the building, and the light is steady, not blinking like a fake. It\u2019s real. You walk through the passage confidently, knowing someone is watching. The good kind of watching.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You squint at the camera but can\u2019t tell if it\u2019s real or a deterrent. Not worth the gamble. You stick to the main sidewalk instead.`,
          statChanges: {}
        }
      }
    ]
  },
  {
    id: 'phone-dying',
    title: 'Two Percent',
    text: `Your phone buzzes once and the screen dims: 2% battery. The notification feels like a countdown timer. You have enough juice for one more thing \u2014 a text, a map check, a call. Maybe. After that, it\u2019s dark glass in your pocket. The weight of being truly unreachable settles in your chest.`,
    choices: [
      {
        text: 'Text someone that you\u2019re walking home',
        decision: 'texted-someone',
        success: {
          text: `You thumb out a quick text: \u201CWalking home from downtown. 12 blocks. Text you when I\u2019m in.\u201D You hit send just before the screen dies. Someone knows where you are. That knowledge is a kind of armor.`,
          statChanges: { courage: 1 }
        }
      },
      {
        text: 'Check the map for the fastest route',
        statCheck: { stat: 'streetSmarts', difficulty: 8 },
        success: {
          text: `You pull up the map and memorize the next three turns before the app freezes and the screen goes black. But the route is locked in your head now \u2014 right on Elm, left on Ninth, straight to your block. Knowledge is power.`,
          statChanges: { streetSmarts: 2 }
        },
        failure: {
          text: `The map app takes forever to load and your phone dies mid-zoom. You caught a glimpse of the route \u2014 something about turning on Elm \u2014 but the details are fuzzy. Better than nothing.`,
          statChanges: { streetSmarts: 1 }
        }
      },
      {
        text: 'Save the battery for a real emergency',
        success: {
          text: `You power the phone off and slide it into your pocket. Two percent, saved for when it matters. The street feels quieter without the screen glow, but there\u2019s something steadying about having a lifeline in reserve.`,
          statChanges: { courage: 1, streetSmarts: 1 }
        }
      },
      {
        text: 'Call a friend to stay on the line',
        statCheck: { stat: 'courage', difficulty: 8 },
        success: {
          text: `You hit call. It rings twice. \u201CHey, what\u2019s up?\u201D Your friend\u2019s sleepy voice is the best thing you\u2019ve heard all night. You talk for three blocks before the phone dies mid-sentence. But those three blocks flew by.`,
          statChanges: { courage: 2, stamina: 1 }
        },
        failure: {
          text: `You call but it rings out to voicemail. The phone dies before you can try anyone else. The silence that follows feels louder than before.`,
          statChanges: { courage: -1 }
        }
      }
    ]
  },
  {
    id: 'loud-argument',
    title: 'Voices Ahead',
    text: `Raised voices carry from around the corner. A man and a woman are arguing on the sidewalk, loud and heated \u2014 something about keys and money and who said what. They\u2019re right in your path. The argument sounds personal, not dangerous, but it\u2019s blocking the way and emotions are running high.`,
    choices: [
      {
        text: 'Walk past quickly, eyes forward',
        statCheck: { stat: 'courage', difficulty: 8 },
        success: {
          text: `You walk past with purpose, giving them space but not crossing the street. They\u2019re too wrapped up in each other to notice you. Three seconds and you\u2019re past it. Someone else\u2019s problem.`,
          statChanges: {}
        },
        failure: {
          text: `You try to walk past but the man turns suddenly \u2014 \u201CWhat are you looking at?\u201D He\u2019s not really talking to you, just venting. But it\u2019s enough to make you walk faster, pulse spiking.`,
          statChanges: { courage: -1 }
        }
      },
      {
        text: 'Cross the street and go around',
        success: {
          text: `You cross before they notice you, giving the argument a wide berth. Their voices fade behind you. Not your circus. You\u2019ve got your own midnight to deal with.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Wait around the corner for it to die down',
        statCheck: { stat: 'streetSmarts', difficulty: 7 },
        success: {
          text: `You hang back at the corner, leaning against the wall. After a minute, the argument burns itself out. The woman walks one way, the man the other. You wait ten seconds and continue on a clear sidewalk.`,
          statChanges: {}
        },
        failure: {
          text: `You wait, but it escalates instead of dying down. After two minutes of rising volume, you give up and cross the street to go around. Time and energy wasted.`,
          statChanges: { stamina: -1 }
        }
      },
      {
        text: 'Ask if everything\u2019s okay',
        requires: { stat: 'courage', min: 7 },
        statCheck: { stat: 'courage', difficulty: 11 },
        decision: 'intervened-argument',
        success: {
          text: `\u201CEverything alright here?\u201D Your voice cuts through the noise. They both stop. The woman looks at you with something like gratitude. The man mutters and walks away. She mouths \u201Cthank you\u201D and heads in the other direction. Your hands are trembling, but you did something.`,
          statChanges: { courage: 2 }
        },
        failure: {
          text: `You ask if they\u2019re okay and they both turn on you. \u201CMind your own business.\u201D You raise your hands and back off. Fair enough. You cross the street, heart pounding, feeling foolish and brave in equal measure.`,
          statChanges: { courage: -1, stamina: -1 }
        }
      }
    ]
  },
  {
    id: 'the-underpass',
    title: 'Under the Highway',
    text: `The pedestrian route funnels you toward a highway underpass — two hundred feet of stained concrete, humming fluorescent tubes with half the bulbs dead, and a smell that mixes exhaust with something worse. Shapes move in the shadows along the wall. Someone has a small fire going in a barrel near the far end. There is no other way across the highway.`,
    choices: [
      {
        text: 'Walk through quickly, eyes forward',
        statCheck: { stat: 'courage', difficulty: 10 },
        success: {
          text: `You keep your pace steady and your eyes straight ahead. Someone mutters as you pass. The fire crackles. Footsteps echo — yours. You emerge on the other side and the night air hits your face like cold water. Through.`,
          statChanges: { courage: 1 }
        },
        failure: {
          text: `You\u2019re halfway through when someone steps into your path. "Got a light?" You shake your head and try to go around, but another figure appears behind you. You freeze. After a long second, they part and let you through. You walk the rest of the way on legs that won\u2019t stop shaking.`,
          statChanges: { courage: -2, stamina: -2 }
        }
      },
      {
        text: 'Hug the far wall and move fast',
        statCheck: { stat: 'streetSmarts', difficulty: 10 },
        success: {
          text: `You pick the wall farthest from the barrel fire and move quick, keeping your footsteps light. You read the space — who\u2019s sleeping, who\u2019s awake, where the gaps are. You thread through without anyone noticing. Street instinct.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You try to sneak along the far wall but kick a bottle in the dark. The sound ricochets off concrete. Heads turn. "Hey!" You don\u2019t wait — you run, feet pounding through puddles, and don\u2019t stop until you\u2019re a block clear.`,
          statChanges: { stamina: -2, streetSmarts: -1 }
        }
      },
      {
        text: 'Approach the fire and ask to pass through',
        statCheck: { stat: 'courage', difficulty: 12 },
        success: {
          text: `You walk up to the barrel fire and nod at the people around it. "Just passing through." An old man looks you over and shrugs. "Go ahead." You walk through their space with something like permission, and they go back to their conversation. Sometimes honesty is the bravest thing.`,
          statChanges: { courage: 2, streetSmarts: 1 }
        },
        failure: {
          text: `You approach the fire and open your mouth. The nearest person stands up — taller than you expected. "What do you want?" You stammer something about passing through. "Then pass," he says, but someone behind you grabs your jacket. You tear free and run, hearing laughter that follows you into the night.`,
          statChanges: { courage: -2, stamina: -3 }
        }
      }
    ]
  },
  {
    id: 'followed-feeling',
    title: 'Footsteps',
    text: `You hear them a block back. Footsteps. Not loud — just present. Matching your pace. When you speed up, they speed up. When you stop at a crosswalk, they stop too. You glance back once and see a figure, hood up, fifty yards behind. Could be nothing. Could be everything.`,
    choices: [
      {
        text: 'Duck into the next open business',
        statCheck: { stat: 'streetSmarts', difficulty: 9 },
        success: {
          text: `You spot a 24-hour laundromat and slip inside. Through the glass you watch the hooded figure pass without slowing. Just someone walking the same direction. Or someone who realized you noticed. Either way, you wait five minutes in the warm hum of dryers before heading out.`,
          statChanges: { streetSmarts: 1 }
        },
        failure: {
          text: `You try the nearest door — locked. And the next. All closed. You end up standing in a doorway pretending to use your phone while the footsteps get closer. They pass you — a teenager in headphones, oblivious. But your nerves are shot.`,
          statChanges: { courage: -1, stamina: -1 }
        }
      },
      {
        text: 'Stop and turn around to face them',
        statCheck: { stat: 'courage', difficulty: 11 },
        success: {
          text: `You stop dead and turn around. The figure stops too. For a long moment you just stare at each other across the dark street. Then they turn and walk the other way. You\u2019ll never know what that was. But they know you\u2019re not an easy mark.`,
          statChanges: { courage: 2 }
        },
        failure: {
          text: `You spin around and the figure is closer than you thought — twenty feet, not fifty. Your courage evaporates. You turn and run, no strategy, no direction, just away. You zigzag through side streets for ten minutes before you feel safe enough to stop. You have no idea where you are.`,
          statChanges: { courage: -2, stamina: -3, streetSmarts: -1 }
        }
      },
      {
        text: 'Cross the street and take three random turns',
        statCheck: { stat: 'streetSmarts', difficulty: 10 },
        success: {
          text: `You cross mid-block, take a left, a right, another right. Counter-surveillance basics you read somewhere. After the third turn you stop and listen. Nothing. Just the city. You loop back to your route and keep walking, heart still going but mind steady.`,
          statChanges: { streetSmarts: 2 }
        },
        failure: {
          text: `You start taking random turns but panic sets in — left, left, right — you\u2019ve lost your route. The streets look wrong. Every shadow has footsteps. By the time you find a street sign you recognize, you\u2019ve burned through your remaining energy on pure fear.`,
          statChanges: { stamina: -3, courage: -1 }
        }
      },
      {
        text: 'Run at them',
        statCheck: { stat: 'courage', difficulty: 14 },
        success: {
          text: `Something snaps. Instead of running away, you run toward them — full sprint, no hesitation. The figure freezes, then turns and bolts. You chase for half a block before stopping, breathing hard, standing alone in the empty street. You scared them. The hunted became the hunter. Your hands are shaking but you\u2019re grinning.`,
          statChanges: { courage: 3, stamina: 1 }
        },
        failure: {
          text: `You charge toward the figure. They don\u2019t run. They don\u2019t even flinch. You skid to a stop ten feet away and realize this person is much bigger than you. They take a step forward. You turn and run — really run — until your lungs burn and your vision blurs. You collapse against a building, gasping, and don\u2019t move for five minutes.`,
          statChanges: { stamina: -4, courage: -3 }
        }
      }
    ]
  },
  {
    id: 'dark-park',
    title: 'The Park',
    text: `Riverside Park stretches across your path — four blocks of walking trails, old trees, and total darkness. The park lights went out months ago and the city hasn\u2019t fixed them. Going around adds six blocks. Going through saves time and energy, if you can handle walking through a lightless park at midnight alone.`,
    choices: [
      {
        text: 'Go around — the long way, the safe way',
        success: {
          text: `You take the sidewalk around the park. It\u2019s six extra blocks of concrete and your feet are screaming, but you can see every step under streetlights. Sometimes the price of safety is just more walking.`,
          statChanges: { stamina: -3 }
        }
      },
      {
        text: 'Cut through on the main path',
        statCheck: { stat: 'courage', difficulty: 11 },
        success: {
          text: `You find the main path and walk in. The canopy closes overhead and the city disappears. Just your footsteps and the rustle of leaves. You walk fast, guided by the pale strip of gravel underfoot, and emerge on the other side with your nerves jangling but your legs grateful.`,
          statChanges: { stamina: 2, courage: 1 }
        },
        failure: {
          text: `The path forks and in the dark you take the wrong branch. It narrows, turns to dirt, and dead-ends at a fence. You have to backtrack, stumbling over roots, and by the time you find the right path your shins are bruised and your nerves are in tatters.`,
          statChanges: { stamina: -2, courage: -2 }
        }
      },
      {
        text: 'Navigate by the sound of the river',
        statCheck: { stat: 'streetSmarts', difficulty: 11 },
        success: {
          text: `You listen. There — the river, to your left. You keep it at your shoulder and walk straight through, ignoring the paths entirely, cutting across grass and gravel. The river guides you like a compass and you pop out on the far side in half the time. Clever navigation.`,
          statChanges: { stamina: 2, streetSmarts: 2 }
        },
        failure: {
          text: `You try to follow the river but the sound bounces off the buildings and trees. You lose direction, wade through a muddy ditch, and eventually spot streetlights through the trees and stumble toward them. Your shoes are ruined, you\u2019re freezing, and you\u2019ve lost all sense of where you are.`,
          statChanges: { stamina: -3, streetSmarts: -1 }
        }
      },
      {
        text: 'Sprint through the darkness — don\u2019t stop for anything',
        statCheck: { stat: 'courage', difficulty: 13 },
        success: {
          text: `You take a breath and explode into a run. The dark swallows you whole. Branches whip your face, your feet pound blind on gravel, and every shadow screams threat. But you don\u2019t stop. Two minutes of pure terror and you\u2019re through — bursting into streetlight like coming up for air. You\u2019ve never felt more alive.`,
          statChanges: { courage: 3, stamina: 3 }
        },
        failure: {
          text: `You run blind and fast. Too fast. Your foot catches a tree root and you go airborne, landing face-first in wet grass. The wind goes out of you. You lie there in total darkness, unable to breathe, unable to see, the city a distant hum. When you finally get up, everything hurts. You limp to the nearest light in silence.`,
          statChanges: { stamina: -5, courage: -2 }
        }
      }
    ]
  }
];

const EndingsData = {
  failure_early: {
    title: 'Lost',
    isFailure: true,
    text: `Your legs go first. Then your vision narrows — the streetlights stretching into long smears of amber. You sit down on the curb because you can\u2019t not sit down. The concrete is cold and wet.

You try your phone. The screen flickers once, shows 1%, and dies in your hand.

The street name on the sign above you — you don\u2019t recognize it. You should recognize it. You\u2019ve lived in this city for two years. But everything looks wrong in the dark, from down here, when you can\u2019t stand up.

A car passes. It doesn\u2019t slow down.

You pull your jacket tighter and wait. For what, you\u2019re not sure. Your eyes are heavy. The city hums its low, indifferent hum. Somewhere, your apartment is warm and lit and locked.

You close your eyes. Just for a moment.`
  },
  failure_mid: {
    title: 'Stranger',
    isFailure: true,
    text: `You make it halfway. That\u2019s what you keep telling yourself as your legs finally give out on a bench in a neighborhood you barely know.

You sit there, head in your hands, listening to your own breathing. A car door closes somewhere nearby. Footsteps approach — slow, deliberate. You don\u2019t have the energy to look up.

\u201CHey. You okay?\u201D

A voice. You can\u2019t tell if it\u2019s concerned or something else. You raise your head. A figure stands under the streetlight — face in shadow, hands in pockets. Behind them, a car idles with the headlights on.

\u201CYou need a ride somewhere?\u201D

Every instinct you have left is screaming two different things. But your legs won\u2019t carry you. Your phone is dead. You\u2019re sitting on a bench in the dark in a neighborhood with no name.

You look at the car. You look at the figure.

You\u2019re too tired to be afraid.`
  },
  failure_late: {
    title: 'So Close',
    isFailure: true,
    text: `You can see it. Your building — the brick face, the green awning, the light in Mrs. Chen\u2019s window on the third floor. Two blocks away. Maybe three. Close enough to count windows.

Your body doesn\u2019t care.

Your right leg buckles first, then your left, and you go down on a bus stop bench like someone cut your strings. The metal is freezing. You can see your breath. You can see home.

You try to stand. Your legs say no. Not a negotiation — a fact. You\u2019ve used everything you had, and this is where it ran out. Two blocks short. You can see your own window from here, dark and waiting.

A bus pulls up. The driver opens the door and looks at you. You don\u2019t have bus fare. You don\u2019t have anything.

The doors close. The bus pulls away.

You sit there, staring at your building, close enough to throw a stone at it. The night settles around you like something with weight. You are so close. But close doesn\u2019t get you inside. Close doesn\u2019t lock the deadbolt.

Close is just another word for not enough.`
  },
  triumphant: {
    title: 'Home',
    text: `You see your building from half a block away and something swells in your chest \u2014 not just relief, but something stronger. You climbed twelve blocks of midnight city and you\u2019re still standing. Still walking.

You take the stairs instead of the elevator. Your legs burn, but you want to feel every step.

Inside, you lock the door \u2014 not frantically, just calmly, the way you lock up any night. You pour a glass of water and stand at the window, looking down at the streets you just walked.

They don\u2019t look so different from up here. Just a city. Your city.

You handled it.`
  },
  relieved: {
    title: 'Made It',
    text: `The moment your key hits the lock, your whole body exhales. You push through the door, kick off your shoes, and lean against the wall with your eyes closed.

You made it.

It wasn\u2019t easy. There were moments when you wanted to sit down on the curb and just stop. But you didn\u2019t. You kept walking, kept choosing, kept moving forward.

You fill a glass of water with shaking hands and drink the whole thing. Then you lock the deadbolt, check it twice, and finally let your shoulders drop.

Tomorrow this will be a story. Tonight, it\u2019s just relief.`
  },
  barely: {
    title: 'Almost Didn\u2019t',
    text: `You half-fall through your front door and catch yourself on the hallway wall. Your legs are shaking, your hands are numb, and you can\u2019t remember the last three blocks clearly \u2014 just one foot in front of the other, automatic.

You don\u2019t take off your shoes. You don\u2019t pour water. You lock the door and collapse onto the couch, still in your jacket.

The ceiling stares back at you. You stare at it.

You made it. Barely. But barely counts.

Your eyes close. Tomorrow, this walk will feel smaller. But right now, in the dark of your apartment, you\u2019re just grateful to be horizontal and home.`
  },
  kind: {
    title: 'Not Alone',
    text: `You unlock your door and step inside, kicking off your shoes into the familiar dark of your hallway.

Tonight was hard. The city threw everything at you \u2014 the dark, the cold, the uncertainty of every corner. But it wasn\u2019t all shadows.

You stopped for people. A lost tourist, a woman on a bench, a cat stuck in a fence. You could have walked past every one of them. Nobody would have blamed you. But you didn\u2019t.

You fill the kettle and wait for it to boil, thinking about the guitarist on the corner, the clerk who warned you about Sixth Street. The city is rough, but it\u2019s not heartless. Neither are you.

The tea is warm in your hands. You\u2019re home. And somehow, the walk there made you feel less alone, not more.`
  }
};

const KIND_DECISIONS = [
  'helped-tourist', 'helped-cat', 'checked-on-stranger',
  'sat-with-stranger', 'tipped-musician', 'intervened-argument'
];

const KIND_THRESHOLD = 3;
