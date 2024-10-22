# Cesspit - Authentication - Jack or Queen

![A cesspit with an open iron gate.[medium]](/static/images/games/azure-cloud-castle/cesspit-gate-open.jpg)

You jump into the cesspit holding your nose as you swim towards the gate.
As you reach the gate you notice that the gate has no lock. It was probably mistakingly assumed that no lock would be necessary as the feeces and excrements in the cesspit would deter anyone from jumping in and swimming across.
Since the gate is unlocked you force it open and enter into the lower part of the castle dungeon.

## Note:

The key concept is inconsistent or missing authentication.

For each entry point, check and test that the correct degree of authentication is required and occurs. Ensure this includes:

- Access to remote systems.
- APIs.
- Non HTML content (e.g. files, images).
- Reporting.
- Any other 'internal' functionality.

The degree of identity assurance may not be the same for all web application functions. Or the authentication function may be available in a weaker manner in some other mode or channel, thus compromising the web application. 

You may mistakingly assume that no authentication is necessary due to the fact that the functionality is hidden, inaccessible or in this case, protected by a **stinking** cesspit, but a good hacker always find his way around these type of barriers.
