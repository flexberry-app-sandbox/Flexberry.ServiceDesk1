﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ServiceDesk
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Responsible.
    /// </summary>
    // *** Start programmer edit section *** (Responsible CustomAttributes)

    // *** End programmer edit section *** (Responsible CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ResponsibleE", new string[] {
            "Name as \'Name\'",
            "Surname as \'Surname\'",
            "Postion as \'Postion\'",
            "Postion.Name as \'Name\'"}, Hidden=new string[] {
            "Postion.Name"})]
    [MasterViewDefineAttribute("ResponsibleE", "Postion", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("ResponsibleL", new string[] {
            "Name as \'Name\'",
            "Surname as \'Surname\'",
            "Postion.Name as \'Name\'"})]
    public class Responsible : ICSSoft.STORMNET.DataObject
    {

        private string fName;

        private string fSurname;

        private IIS.ServiceDesk.Postion fPostion;

        // *** Start programmer edit section *** (Responsible CustomMembers)

        // *** End programmer edit section *** (Responsible CustomMembers)


        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Responsible.Name CustomAttributes)

        // *** End programmer edit section *** (Responsible.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Responsible.Name Get start)

                // *** End programmer edit section *** (Responsible.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Responsible.Name Get end)

                // *** End programmer edit section *** (Responsible.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Responsible.Name Set start)

                // *** End programmer edit section *** (Responsible.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Responsible.Name Set end)

                // *** End programmer edit section *** (Responsible.Name Set end)
            }
        }

        /// <summary>
        /// Surname.
        /// </summary>
        // *** Start programmer edit section *** (Responsible.Surname CustomAttributes)

        // *** End programmer edit section *** (Responsible.Surname CustomAttributes)
        [StrLen(255)]
        public virtual string Surname
        {
            get
            {
                // *** Start programmer edit section *** (Responsible.Surname Get start)

                // *** End programmer edit section *** (Responsible.Surname Get start)
                string result = this.fSurname;
                // *** Start programmer edit section *** (Responsible.Surname Get end)

                // *** End programmer edit section *** (Responsible.Surname Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Responsible.Surname Set start)

                // *** End programmer edit section *** (Responsible.Surname Set start)
                this.fSurname = value;
                // *** Start programmer edit section *** (Responsible.Surname Set end)

                // *** End programmer edit section *** (Responsible.Surname Set end)
            }
        }

        /// <summary>
        /// Responsible.
        /// </summary>
        // *** Start programmer edit section *** (Responsible.Postion CustomAttributes)

        // *** End programmer edit section *** (Responsible.Postion CustomAttributes)
        [PropertyStorage(new string[] {
                "Postion"})]
        [NotNull()]
        public virtual IIS.ServiceDesk.Postion Postion
        {
            get
            {
                // *** Start programmer edit section *** (Responsible.Postion Get start)

                // *** End programmer edit section *** (Responsible.Postion Get start)
                IIS.ServiceDesk.Postion result = this.fPostion;
                // *** Start programmer edit section *** (Responsible.Postion Get end)

                // *** End programmer edit section *** (Responsible.Postion Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Responsible.Postion Set start)

                // *** End programmer edit section *** (Responsible.Postion Set start)
                this.fPostion = value;
                // *** Start programmer edit section *** (Responsible.Postion Set end)

                // *** End programmer edit section *** (Responsible.Postion Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "ResponsibleE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ResponsibleE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ResponsibleE", typeof(IIS.ServiceDesk.Responsible));
                }
            }

            /// <summary>
            /// "ResponsibleL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ResponsibleL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ResponsibleL", typeof(IIS.ServiceDesk.Responsible));
                }
            }
        }
    }
}
