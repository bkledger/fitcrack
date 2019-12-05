/**
 * @file Job.h
 * @brief Header file for fc_job entry
 * @authors Lukas Zobal (zobal.lukas(at)gmail.com)
 * @date 12. 12. 2018
 * @license MIT, see LICENSE
 */

#ifndef WORKGENERATOR_JOB_H
#define WORKGENERATOR_JOB_H

#include <Config.h>


class CSqlLoader;
class CJob;
class CMask;
class CDictionary;
using PtrJob = Config::Ptr<CJob>;


class CJob {
    private:
        /**
         * @brief Private constructor, called by create() static function
         * @param jobMap [in] Map representing fc_job table entry
         * @param sqlLoader [in] Pointer to SqlLoader for database updates
         */
        explicit CJob(DbMap & jobMap, CSqlLoader * sqlLoader);

    public:
        /** Default destructor */
        ~CJob() = default;

        /**
         * @brief Creating instance as a shared pointer from database select
         * @param hostMap [in] Map representing fc_job table entry
         * @param sqlLoader [in] Pointer to SqlLoader for database updates
         * @return Shared pointer to fc_job entry object
         */
        static PtrJob create(DbMap &jobMap, CSqlLoader * sqlLoader);

        /**
         * @brief Get the job SQL table name, usually fc_job
         * @return Job SQL table name
         */
        static std::string getTableName();

        /**
         * @brief Updates index of this job object and database entry
         * @param newIndex [in] New mask current index
         */
        void updateIndex(uint64_t newIndex);

        /**
         * @brief Updates index 2 of this job object and database entry
         * @param newIndex [in] New mask current index 2
         */
        void updateIndex2(uint64_t newIndex2);

        /**
         * @brief Updates status of this job object and database entry
         * @param newIndex [in] New job status
         */
        void updateStatus(Config::JobState newStatus);

        /**
         * @brief Updates status of running job, otherwise, does nothing
         * @param newIndex [in] New job status, original status must be >= 10
         */
        void updateStatusOfRunningJob(Config::JobState newStatus);

        /**
         * @brief Updates start time of job database entry to now, only if it is NULL
         */
        void updateStartTime();

        /**
         * @brief Loads all non-exhausted mask database entries for this job to job vector m_masks
         */
        void loadMasks();

        /**
         * @brief Loads all non-exhausted dictionary database entries for this job to job vector m_dictionaries
         */
        void loadDictionaries();

        /**
         * @brief Loads all non-cracked hash database entries fot his job to job string m_hashes
         * @return True if any hashes were loaded, False otherwise
         */
        bool loadHashes();

    private:

        CSqlLoader * m_sqlLoader;         /**< SqlLoader for database updating */

        /**
         * @section Table attributes of fc_job
         */

        uint64_t    m_id;
        std::string m_attack;
        uint32_t    m_attackMode;
        uint32_t    m_attackSubmode;
        uint32_t    m_hashType;
        std::string m_hash;
        uint32_t    m_status;
        uint64_t    m_keyspace;
        uint64_t    m_hcKeyspace;
        uint64_t    m_currentIndex;
        uint64_t    m_currentIndex2;
        std::string m_name;
        uint64_t    m_secondsPerWorkunit;
        std::string m_config;
        std::string m_dict1;
        std::string m_dict2;
        std::string m_rules;
        std::string m_grammar;
        uint64_t    m_grammar_id;
        std::string m_markov;
        uint32_t    m_markovThreshold;
        uint32_t    m_replicateFactor;
        bool        m_killFlag;

        /**
         * @section Other member variables
         */

        uint64_t m_combSecDictSize;     /**< Size of second dictionary in Combinator attack */
        std::vector<Config::Ptr<CMask>> m_masks;    /**< Vector of non-exhausted masks for mask attack */
        std::vector<Config::Ptr<CDictionary>> m_dictionaries;  /**< Vector of non-exhausted dictionaries */
        std::string m_hashes;           /**< job hash(es) denoted by newlines */

        uint64_t m_totalPower;          /**< Sum of host power for this job */
        uint64_t m_secondsPassed;       /**< Seconds from time_start to now() */
        uint64_t m_maxSeconds;          /**< Maximum time of workunit */
        unsigned int m_timeoutFactor;   /**< Timeout for workunits, factor of time for a single workunit */

    public:

        /**
         * @section Getters for table attributes
         */

        uint64_t getId() const;
        const std::string &getAttack() const;
        uint32_t getAttackMode() const;
        uint32_t getAttackSubmode() const;
        uint32_t getHashType() const;
        const std::string & getHash() const;
        uint32_t getStatus() const;
        uint64_t getKeyspace() const;
        uint64_t getHcKeyspace() const;
        uint64_t getCurrentIndex() const;
        uint64_t getCurrentIndex2() const;
        const std::string & getName() const;
        uint64_t getSecondsPerWorkunit() const;
        const std::string & getConfig() const;
        const std::string & getDict1() const;
        const std::string & getDict2() const;
        const std::string & getRules() const;
        uint64_t getGrammarId() const;
        const std::string & getMarkov() const;
        uint32_t getMarkovThreshold() const;
        uint32_t getReplicateFactor() const;
        bool getKillFlag() const;

        void setGrammar(const std::string & grammar);

    /**
     * @section Getters/Setters for other member variables
     */

        std::vector<Config::Ptr<CMask>> getMasks() const;
        void addMask(Config::Ptr<CMask> mask);

        std::vector<Config::Ptr<CDictionary>> getDictionaries() const;
        std::vector<Config::Ptr<CDictionary>> getRightDictionaries() const;
        void addDictionary(Config::Ptr<CDictionary> dictionary);

        std::string getHashes() const;

        uint64_t getTotalPower() const;
        uint64_t getSecondsPassed() const;
        uint64_t getMaxSeconds() const;
        uint64_t getCombSecDictSize() const;
        unsigned int getTimeoutFactor() const;

        const std::string & getGrammar() const;
};

#endif //WORKGENERATOR_JOB_H