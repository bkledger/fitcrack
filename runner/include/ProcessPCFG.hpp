/*
 * Author : see AUTHORS
 * Licence: MIT, see LICENSE
 */

#ifndef PROCESSPCFG_HPP
#define PROCESSPCFG_HPP

#include "Directory.hpp"

#include "File.hpp"

#include "ProcessLinux.hpp"
#include "ProcessWindows.hpp"

/** Namespace for creating new process via function */
namespace ProcessPCFG {

    /**
     * @brief   Creates new platform based process
     * @param   arguments [in] Arguments to run hashcat with
     * @param   directory [in] Working directory
     * @return  Pointer to new Process object
     */
    ProcessBase* create(const std::vector<std::string>& arguments, Directory& directory);
};
#endif // PROCESSPCFG_HPP