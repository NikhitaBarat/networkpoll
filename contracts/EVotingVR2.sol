// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EVoting {
    // Struct to represent an election
    struct Election {
        uint id;
        string name;
        string[] candidates;
        uint[] votes;
        bool active;
    }

    // Mapping from election id to election struct
    mapping(uint => Election) public elections;

    // Array of all election IDs
    uint[] public electionIds;

    // Number of elections created
    uint public electionCount;

    // Mapping to store whether a given address has already voted in a given election
    mapping(uint => mapping(address => bool)) public hasVoted;

    // Create a new election with a given name and list of candidates
    function createElection(string memory _name, string[] memory _candidates) public {
        // Create a new election struct and add it to the mapping
        electionCount++;
        uint id = electionCount;
        elections[id] = Election(
            id,
            _name,
            _candidates,
            new uint[](_candidates.length),
            true
        );
        // Add the election ID to the array of all election IDs
        electionIds.push(id);
    }

    // Cast a vote in a given election for a given candidate
    function vote(uint _electionId, uint _candidateIndex) public {
        // Get the election struct
        Election storage election = elections[_electionId];

        // Ensure the election is active
        require(election.active, "Election is not active");

        // Ensure the candidate index is valid
        require(_candidateIndex < election.candidates.length, "Invalid candidate index");

        // Ensure the voter has not already voted in this election
        require(!hasVoted[_electionId][msg.sender], "You have already voted in this election");

        // Cast the vote and mark that the voter has voted
        election.votes[_candidateIndex]++;
        hasVoted[_electionId][msg.sender] = true;
    }

    // Get the results of a given election
    function getResults(uint _electionId) public view returns (string[] memory, uint[] memory) {
        // Get the election struct
        Election storage election = elections[_electionId];

        // Return the candidates and their vote totals
        return (election.candidates, election.votes);
    }

    // End an election
    function endElection(uint _electionId) public {
        // Get the election struct
        Election storage election = elections[_electionId];

        // Ensure the caller is the owner of the contract
        require(msg.sender == address(this), "Only the contract owner can end an election");

        // Set the active flag to false
        election.active = false;
    }
}
