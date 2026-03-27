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
  }
];

const EndingsData = {
  failure: {
    title: 'You Couldn\u2019t Go On',
    text: `Your legs finally refuse. You sink onto a bus bench, every muscle spent, and pull out your phone \u2014 but the screen stays dark. Dead.

You sit there in the cold, watching the occasional car drift past, until a rideshare driver notices you slumped on the bench and pulls over. \u201CYou alright?\u201D

You get home eventually. But not on your own feet. Not tonight.

The deadbolt clicks behind you. You lean against the door and slide to the floor. Tomorrow you\u2019ll be fine. But tonight, the city won.`
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
