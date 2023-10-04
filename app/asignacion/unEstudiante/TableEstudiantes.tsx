import React, { useEffect, useState } from "react";
import { Axis, Student } from "@/types/student";
import Modal from "@/components/Modal";
import Selects from "./Selects";
import MultiStudentSelects from "./MultiStudentSelects";
import Link from "next/link";

type TableEstudiantesProps = {};

const TableEstudiantes = ({}: TableEstudiantesProps) => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Brian Bastías",
      axis: [
        {
          id: "algebra_y_funciones",
          label: "Álgebra y funciones",
          abilities: [
            {
              id: "resolver_problemas",
              label: "Resolver problemas",
            },
            {
              id: "modelar",
              label: "Modelar",
            },
            {
              id: "argumentar_y_comunicar",
              label: "Argumentar y comunicar",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Martín Saavedra",
      axis: [
        {
          id: "geometria",
          label: "Geometría",
          abilities: [
            {
              id: "resolver_problemas",
              label: "Resolver problemas",
            },
            {
              id: "representar",
              label: "Representar",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Valentina Díaz",
      axis: [
        {
          id: "probabilidad_y_estadisticas",
          label: "Probabilidad y estadísticas",
          abilities: [
            {
              id: "modelar",
              label: "Modelar",
            },
          ],
        },
        {
          id: "numeros",
          label: "Números",
          abilities: [
            {
              id: "argumentar_y_comunicar",
              label: "Argumentar y comunicar",
            },
          ],
        },
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [multiStudentAxis, setMultiStudentAxis] = useState<Axis>({
    id: "",
    label: "",
    abilities: [],
  });
  const [showModal2, setShowModal2] = useState(false);
  // multiple selection
  const addStudentToSelected = (student: Student) => {
    setSelectedStudents([...selectedStudents, student]);
  };
  const removeStudentFromSelected = (student: Student) => {
    setSelectedStudents(selectedStudents.filter((s) => s.id !== student.id));
  };
  const onChangeStudentCheckbox = (student: Student, checked: boolean) => {
    if (checked) {
      addStudentToSelected(student);
    } else {
      removeStudentFromSelected(student);
    }
  };
  const updateStudentAxis = (student: Student, axis: Axis) => {
    const newStudents = [...students];

    newStudents.forEach((newStudent) => {
      if (newStudent.id === student.id) {
        const axisIndex = newStudent.axis.findIndex((a) => a.id === axis.id);
        if (axisIndex !== -1) {
          console.log(
            "Eje ya existe en estudiante, actualizando habilidades..."
          );

          newStudent.axis[axisIndex].abilities = axis.abilities;
        } else {
          console.log(
            "Eje no existe en estudiante, agregando o modificando eje vacío..."
          );

          const emptyAxisIndex = newStudent.axis.findIndex((a) => a.id === "");
          if (emptyAxisIndex !== -1) {
            newStudent.axis[emptyAxisIndex] = axis;
          } else {
            newStudent.axis.push(axis);
          }
        }
      }
    });

    setStudents(newStudents);
  };

  const removeStudentAxis = (student: Student, axis: Axis) => {
    const newStudents = [...students];

    newStudents.forEach((newStudent) => {
      if (newStudent.id === student.id) {
        newStudent.axis = newStudent.axis.filter((a) => a.id !== axis.id);
      }
    });

    setStudents(newStudents);
  };
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-2 py-2 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto py-3">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="font-medium text-black dark:text-white px-2 text-start py-3"></th>
                <th className="font-medium text-black dark:text-white px-2 text-start py-3">
                  Nombre
                </th>
                <th className="font-medium text-black dark:text-white px-2 text-start py-3">
                  Eje/Habilidad
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={3}>
                  <div className="flex my-4">
                    <button
                      className="items-start justify-center rounded-full bg-black py-2 px-10 text-center font-medium text-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mr-2"
                      onClick={() => setShowModal(true)}
                      disabled={selectedStudents.length === 0}
                    >
                      Agregar eje
                    </button>
                  </div>
                </td>
              </tr>

              {students.map((student, key) => (
                <tr key={key}>
                  <td
                    className={
                      "border-t border-[#eee] pl-4 dark:border-strokedark xl:pl-11"
                    }
                  >
                    <div className="relative z-20 flex items-start">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border border-stroke rounded-sm text-primary focus:ring-0"
                        onChange={(e) =>
                          onChangeStudentCheckbox(student, e.target.checked)
                        }
                      />
                    </div>
                  </td>
                  <td
                    className={
                      "border-t border-[#eee] pl-4 dark:border-strokedark xl:pl-11"
                    }
                  >
                    <p className="text-sm">{student.name}</p>
                  </td>
                  <td
                    className={
                      "border-t border-[#eee] pl-4 dark:border-strokedark xl:pl-11 hidden sm:block"
                    }
                  >
                    {student.axis.map((eje, index) => (
                      <Selects
                        key={index}
                        student={student}
                        selectedAxis={eje}
                        updateStudentAxis={updateStudentAxis}
                        removeStudentAxis={removeStudentAxis}
                      />
                    ))}
                  </td>
                  <td className="block md:hidden">
                    <div className="items-center justify-center">
                      <button
                        className="inline-flex items-center justify-center rounded-full bg-black py-3 w-25 text-center font-medium text-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mr-2"
                        onClick={() => setShowModal2(true)}
                        disabled={selectedStudents.length === 0}
                      >
                        Ver ejes
                      </button>
                    </div>
                  </td>

                  <td
                    className={
                      "pl-4 dark:border-strokedark p-3 xl:pl-11 hidden sm:block items-end justify-end"
                    }
                  >
                    <button
                      className="inline-flex items-center justify-center rounded-sm bg-black p-4 text-center font-medium text-sm text-white hover:bg-opacity-90 h-4 w-4"
                      onClick={() =>
                        updateStudentAxis(student, {
                          id: "",
                          label: "",
                          abilities: [],
                        })
                      }
                    >
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title="Modificar ejes"
        body={
          <MultiStudentSelects
            students={selectedStudents}
            axis={multiStudentAxis}
            setAxis={setMultiStudentAxis}
          />
        }
        show={showModal}
        setShow={setShowModal}
        onSubmit={() => {
          selectedStudents.forEach((student) => {
            updateStudentAxis(student, multiStudentAxis);
          });

          setShowModal(false);
        }}
      />
      {/* <Modal
				title="Ejes de estudiante"
				body={<Selects student={student} axis={students.axis} setAxis={setMultiStudentAxis} />}
				show={showModal2}
				setShow={setShowModal2}
				onSubmit={() => {
					selectedStudents.forEach((student) => {
						updateStudentAxis(student, multiStudentAxis);
					});

					setShowModal(false);
				}}
			/> */}
    </>
  );
};

export default TableEstudiantes;
