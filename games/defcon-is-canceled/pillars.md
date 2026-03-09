# The Pillars

These are examples of pillar cards that can be created.

## Pillar 1 — The Keynotes

### Opening Narration

> "First up: the Keynotes. This year's lineup is the strongest Jeff has managed in a decade. Two government officials with clearances you'll never know the level of. A whistleblower whose talk was rejected by four other conferences. And the traditional Thursday night opener — a standing-room-only crowd in the main hall.
>
> The AV team needs to be in place by noon. The Green Room is secured. The speaker wrangler needs to be on deck by ten. Who's going?"

(Players nominate a deployment team.)

### Active Threat

- **LOC9** (Sofia / Green Room spoofing)
- **DIG5** (Elena / BGP hijacking)
- **MAN9** (Manipulation & Elicitation)

### After deployment team has been decided

> "The team heads to the main stage area. The speaker wrangler is already on site. One of the keynote staff mentions something odd — a woman in a staff shirt was asking detailed questions about the service elevator near the Green Room. Nobody has seen her before. She's gone now."

### Outcomes

**No incident**:

> "The keynotes run smoothly. The speakers are happy. The audience is engaged.

**Sabotage**:

> "An hour before showtime, a government keynote speaker is redirected by what appears to be an official Slack message — to a public hallway outside the authorized area. Your team has to scramble. The speaker refuses to go on, citing a security concern. The main hall fills and waits. After forty-five minutes, the program starts an hour late. The press notices."

### Pillar succeeds

> "The keynotes run without a hitch. Attendance is record-setting. The whistleblower's talk trends globally within twenty minutes of the recording hitting the net. Jeff looks, for the first time all week, like he might sleep tonight."

### Pillar fails

> "The keynotes are a mess. The first speaker is delayed by an hour. The second speaker cancels entirely, citing 'unresolved security concerns.' The third speaker goes on as scheduled but their talk is overshadowed by the drama. The press has a field day. Jeff looks like he might cry."

---

## Pillar 2 — The CTF

### Opening Narration

> "The Benevolent Bureau of Birds is ready to run the most complex CTF in DEF CON history. Forty-eight hours of continuous hacking. Credentials, exploits, and one grand prize. The scoring engine is up. The network segment is isolated. The flags are live.

Players nominate a deployment team.

### Active Threat

- **BAI5** (Elena / cloned badges / credential sniffer).

### After deployment team has been decided

> One of the BBB organizers pulls you aside before the doors open. 'Someone was in the hallway near the server room last night. The lock was fine, but the server room smelled like isopropyl alcohol. Someone was in there.'"
> "The CTF floor is buzzing. Teams are set up. The scoreboard is live. For the first two hours, everything runs smoothly. Then the BBB organizer calls you on the radio — the scoring traffic is being routed somewhere. The leaderboard is frozen."

### Outcomes

**No incident**:

> "Isolate the scoring network segment and trace the anomalous routing path. Identify where the traffic is being redirected, cut that path, and restore routing through the verified backup uplink. Do not restart anything until the redirect source is confirmed and removed."

**Sabotage**:

> "Restart the scoring server and wipe the current session cache. Force all competing teams to re-authenticate and start a new scoring period from zero to eliminate any corrupted data."


### Pillar succeeds

> "Your team catches the traffic anomaly in time and reroutes through a backup segment. The scoreboard flickers for eight minutes. Contestants barely notice. The CTF runs through to finals."

### Pillar fails

> "By the time the reroute is identified, four hours of scoring data are compromised. The BBB announces a score reset. Six competing teams refuse to continue. The CTF finals are delayed and the community is furious. A 'CTF is rigged' thread goes viral."

---

## Pillar 3 — The Network

### Opening Narration

> "DEF CON's network is the most attacked network in the world. Intentionally. That's the point. The NOC runs the show: routing, firewall rules, the Wall of Sheep, the Hacker Tracker. Thirty thousand devices online simultaneously.
>
> But this year, one of the NOC volunteers mentions something that doesn't sit right. An Ethernet adapter was found plugged into an unmonitored switch port near the NOC hallway. It wasn't their equipment. It was plugged in and left."

### Active Threat

- **BAI3** (Sarah / Layer-2 loopback adapter).

### After deployment team has been decided

> "The NOC team is on high alert. The suspect adapter has been pulled and bagged. But the question is whether anything got in before it was found. The traffic logs look normal — mostly. There's a brief burst about four hours ago that nobody can explain."

### Outcomes

**No incident**:

> "Treat the unexplained traffic burst as a confirmed Layer-2 attack. Audit every switch port that was active during that time window, revoke and reissue all NOC volunteer credentials, and push fresh firewall rules from a known-good offline backup. The bagged adapter is handed to Director Henderson."

**Sabotage**:

> "A Venue-Wide Network Collapse due to a Layer-2 loopback attack is underway. The NOC must act immediately to stop the bleeding and restore critical services."

### Pillar succeeds

> "The burst turns out to be a volunteer's misconfigured laptop. The adapter was a failed attempt — nothing got through. The network runs clean for the entire conference. The Wall of Sheep has a record capture rate. The crowd cheers when the NOC stats are announced."

### Pillar fails

> "At 2:47 PM, the firewall drops. All of it. For eleven seconds, the main hall network is completely collaped. The NOC scrambles to isolate the attack and restore critical services, but the damage is done. The Wall of Sheep is offline for the rest of the conference. The press has a field day."

---

## Pillar 4 — The Badge

### Opening Narration

> "The 2026 badge. Morgan's masterpiece. It's a cryptographic puzzle that references a 1980s satellite communication protocol, a hidden Morse code message, and a community challenge that will take the entire conference to crack cooperatively.
>
> Fifty thousand badges manufactured. Thirty thousand distributed. And Morgan just found out that two crates of pre-activated badges were left unattended near the registration area this morning. Some of them are gone."

### Active Threat

- **BAI9** (Sofia / bricked RFID readers)
- **DIGK** (Maya / Sub-GHz replay attack).

### After deployment team has been decided

> "The badges are going out. The first thousand attendees scan in fine. Then the registration team radios in — the RFID readers at three of the six entry lanes are throwing errors. They're not processing new badges. The queue is backing up."

### Outcomes

**No incident**:

> "Take the affected RFID readers offline and run a full factory reset on each one. Redirect the queued attendees to the remaining three working lanes while the resets complete. Resume normal scanning once all six lanes are confirmed clean."

**Sabotage**:

> "Two entry lanes go fully offline. Fifteen hundred attendees are stuck in a non-moving queue. The crowd crush near Entry C becomes a safety issue."

### Pillar succeeds

> "Morgan identifies the problem in time: a batch of hardware-modified badges is pulling a bricking payload when scanned. The affected readers are swapped out from spares. The line moves. The badge community solves the first puzzle layer before Friday afternoon."

### Pillar fails

> "Venue security calls a temporary halt on badge distribution. The registration system is manually bypassed for two hours. The badge challenge is delayed by a day."

---

## Pillar 5 — The Party (The Caesar's Challenge Closing Ceremony)

### Opening Narration

> "The last night of DEF CON 34. Caesar's Palace. The Caesar's Challenge party — the conference's informal closing celebration. It's invitation-only for speakers, organizers, and selected guests, but it's the heart of the community. Jeff gives a toast every year. It's the moment that makes all of this worth it.
>
> This year someone is trying to make sure it doesn't happen. The venue coordinator at Caesar's gets a call from someone claiming to be from DEF CON, asking to move the event to a 'more private space.' She almost did it. She's now asking for a callback confirmation from a known contact."

### Active Threat

- **LOCA** (Thomas / Digital Concierge PII harvesting).

### After deployment team has been decided

> "The party is two hours away. The venue has confirmed the callback. The question now is whether anyone got into the room early — and whether the person who made that original call is already inside."

### Outcomes

**No incident**:

> "Treat the unauthorized call as a confirmed social engineering attempt. Contact the Caesar's Palace venue manager directly via a verified phone number (not the one that called them) to lock the guest list and confirm entry is by confirmed badge only. Physically walk every attendee on the list through a Goon-verified check-in. Assume anyone already in the room who cannot be verified is a threat."

**Sabotage**:

> "Twenty minutes into the party, the LVCC's Digital Concierge data is found to have been scraped — room numbers, schedules, and arrival times of international guests. Someone has gotten on the inside."

### Pillar succeeds

> "The party runs perfectly. Jeff's toast is short and uncharacteristically emotional. The community is together. 
> DEF CON 34 is over. DEF CON 35 is already being planned."

### Pillar fails

> "A security breach is confirmed. The venue contacts their legal team. The party is shut down at 11 PM. Jeff gives no toast. The night ends quietly."
