using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Contaner;
using MVCTestWeb.Models;


namespace MVCTestWeb.Controllers
{
    public class EmployeeController : Controller
    {
        MVCProjectEntities db = new MVCProjectEntities();
        // GET: Employee
        public ActionResult EmpIndex(int id)
        {
            //ViewData["EmpIndexList"] = db.EMPLOYEEs.Where(x => x.DEPTID == id).ToList();
            return View(db.EMPLOYEEs.Where(x => x.DEPTID == id).ToList());
        }

        // GET: Employee/Details/5
        public ActionResult EmpDetails(int id)
        {
            return View(db.EMPLOYEEs.FirstOrDefault(x=>x.ID==id));
        }

        // GET: Employee/Create
        public ActionResult EmpCreate()
        {

            return View();
        }

        // POST: Employee/Create
        [HttpPost]
        public ActionResult EmpCreate(EmployeeFinal empFinal)
        {
            EMPLOYEE employee = new EMPLOYEE();
            // Retrieve form data using form collection
            employee.NAME = empFinal.eMPLOYEE.NAME;
            employee.CITY = empFinal.eMPLOYEE.CITY;
            employee.AGE = empFinal.eMPLOYEE.AGE;
            employee.DEPTID = empFinal.eMPLOYEE.DEPTID;
            db.EMPLOYEEs.Add(employee);
            db.SaveChanges();
            
            
            return RedirectToAction("EmpList");
        }
        public ActionResult EmpList()
        {
            EmployeeFinal empFinal = new EmployeeFinal();
            empFinal.eMPLOYEE = null;
            empFinal.eMPLOYEELIST = db.EMPLOYEEs.ToList();
            return View(empFinal);
        }
            //EMPLOYEE employee = new EMPLOYEE();
            //employee.NAME = name;
            //employee.CITY = city;
            //employee.AGE = age;
            //employee.DEPTID = deid;
            //db.EMPLOYEEs.Add(employee);
            
            //db.SaveChanges();
           
        

        // GET: Employee/Edit/5
        public ActionResult EmpEdit(int id)
        {
            return View(new EmployeeFinal() { eMPLOYEE = db.EMPLOYEEs.FirstOrDefault(x => x.ID == id), eMPLOYEELIST = null });
        }

        // POST: Employee/Edit/5
        [HttpPost]
        public ActionResult EmpEdit(int id,EmployeeFinal emp)
        {
            try
            {
                // TODO: Add update logic here
                EMPLOYEE emp1 = db.EMPLOYEEs.FirstOrDefault(x => x.ID == id);
                if(emp1!=null)
                {
                    emp1.NAME = emp.eMPLOYEE.NAME;
                    emp1.CITY = emp.eMPLOYEE.CITY;
                    emp1.AGE = emp.eMPLOYEE.AGE;
                    db.SaveChanges();
                }
                return RedirectToAction("EmpList");
            }
            catch
            {
                return View();
            }
        }

        // GET: Employee/Delete/5
        public ActionResult EmpDelete(int id)
        {

            return View(new EmployeeFinal() { eMPLOYEE = db.EMPLOYEEs.FirstOrDefault(x => x.ID == id), eMPLOYEELIST = null });
        }

        // POST: Employee/Delete/5
        [HttpPost]
        public ActionResult EmpDelete(int id, EmployeeFinal collection)
        {
            try
            {
                db.EMPLOYEEs.Remove(db.EMPLOYEEs.FirstOrDefault(x => x.ID == id));
                db.SaveChanges();
                // TODO: Add delete logic here

                return RedirectToAction("EmpList");
            }
            catch
            {
                return View();
            }
        }
    }
}
